<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\Helper;

use App\Invite;

class SiteController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Request $request)
    {
        // Inject dependencies
        $this->request = $request;
    }


    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function home()
    {
        $data['bundle'] = '/js/site-index.js';
        return view('site', $data);
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
