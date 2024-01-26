<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterRequest;


class UserController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get the base url if not then throw error
        $apiBASEURL = env('API_BASE_URL', '');
        if (empty($apiBASEURL)) {
            return ['error' => 'No Api url found in env file.'];
        }

        $client   = new Client();
        $response = $client->get($apiBASEURL . 'users');
        return $response->getBody()->getContents();
    }

    /**
     * Get token
     *
     * @return \Illuminate\Http\Response
     */
    public function getToken(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return ['access_token' => $user->createToken($user->name.'-AuthToken', ['*'], now()->addWeek())->plainTextToken];
    }

    /**
     * Logout
     *
     * @return \Illuminate\Http\Response
     */
    public function logout() {
        auth()->user()->tokens()->delete();

        return response()->json([
            "message"=>"logged out"
        ]);
    }

    /**
     * Register user
     *
     * @return \Illuminate\Http\Response
     */
    public function register(RegisterRequest $request) {
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        return response()->json([
            'message' => 'User Created ',
        ]);
    }
}
