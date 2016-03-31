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

class AdminController extends Controller
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
        return view('admin');
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

    private function generator()
    {
        // Get input json
        $input = Helper::fetchJSON('../app/React/boilerplate/generators/generate.json');
        // Loop through the json and build
        $generator = Helper::generator($input);

        return $generator;
    }

    private function dashboard()
    {
        // Get list of generator inputs
        $admin['generators'] = array_diff(scandir('../app/React/boilerplate/generators'), array('..', '.'));

        return $admin;
    }

}
