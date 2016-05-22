<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Helpers\Helper;

use App\Models\Seed;

class ReactController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Request $request, Seed $seed)
    {
        $this->request = $request;
        $this->seed = $seed;
    }

    public function react()
    {
        $action = $this->request->route('action');
        $data = $this->request->input('data');
        $info = $this->request->route('info');
        $response = $this->$action($data, $info);
        return json_encode($response);
    }

    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function seed($data, $info)
    {
        $seed = Seed::orderBy('version', 'desc')->first();
        return $seed;
    }

    public function site($data, $info)
    {
        $site = Helper::fetchJSON('/assets/Site/site.json');
        $site->private->container = $this->container;
        return $site;
    }
    
    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

    

}
