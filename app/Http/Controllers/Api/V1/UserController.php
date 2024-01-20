<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

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

        $client   = new Client(['verify' => false]);
        $response = $client->get($apiBASEURL . 'users');

        return $response->getBody()->getContents();
    }
}
