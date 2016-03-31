<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\Helper;

use App\Seed;
use App\Invite;

class ReactController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Request $request)
    {
        // Inject dependencies
        $this->request = $request;

        // Get user information
        //$this->user = $this->getUser();
    }


    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function home()
    {
        $data['title'] = 'blank';
        $data['app'] = 'true';
        $data['site'] = 'false';
        return view('react', $data);
    }

    public function react()
    {
        $action = $this->request->route('action');
        $data = $this->request->input('data');
        $response = $this->$action($data);
        return json_encode($response);
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
