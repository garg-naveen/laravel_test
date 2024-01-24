<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class PostController extends Controller
{
    /**
     * Display a listing of the posts that belongs to a given user.
     *
     * @param  \Closure(\Illuminate\Http\Request)
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // get the base url if not then throw error
        $apiBASEURL = env('API_BASE_URL', '');
        if (empty($apiBASEURL)) {
            return ['error' => 'No Api url found in env file.'];
        }

        $userId = $request->userId;
        if (empty($userId) || !is_numeric($userId)) {
            return ['error' => 'User id is required or you passed not a valid value.'];
        }

        $client   = new Client();
        $response = $client->get($apiBASEURL . "posts?userId=$userId");

        return $response->getBody()->getContents();
    }
}
