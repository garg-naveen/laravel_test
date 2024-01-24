<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
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

        $postId = request()->postId;
        if (empty($postId) || !is_numeric($postId)) {
            return ['error' => 'Post id is required or you passed not a valid value.'];
        }

        $client   = new Client();
        $response = $client->get($apiBASEURL . "comments?postId=$postId");

        return $response->getBody()->getContents();
    }
}
