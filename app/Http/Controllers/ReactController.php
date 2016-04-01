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
        $data['title'] = 'Molly K. Hiatt';
        return view('react', $data);
    }

    public function react()
    {
        $action = $this->request->route('action');
        $info = $this->request->route('info');
        $data = $this->request->input('data');
        $response = $this->$action($data, $info);
        return json_encode($response);
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

    private function content($data, $type)
    {
        $function = "content_".$type;
        $content = $this->$function();
        return $content;
    }

    private function content_initial()
    {
        $initial['display'] = Helper::fetchJSON('/assets/display.json');
        return $initial;
    }
}
