<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ReactController;

use App\Helpers\Helper;

use App\Models\Seed;

class AdminReactController extends ReactController
{
    protected $container = [
        'width' => [
            'sm'=> '1',
            'md'=> '1',
            'lg'=> '0.75'
        ]
    ];
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct (Request $request, Seed $seed)
    {
        parent::__construct($request, $seed);
    }

    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function admin($data, $info)
    {
        $admin['public'] = $this->adminPublic();
        $admin['private'] = $this->adminPrivate();
        return $admin;
    }

    public function login($data, $info)
    {
        if(Auth::attempt(["email" => $data['email'], "password" => $data['password']], true)) {
           $change = [
                ["key" => "private.loggedIn", 
                 "value" => "true"
                ],
                ["key" => "private.user", 
                 "value" => $this->adminPrivateUser()
                ],
                ["key" => "public.message", 
                 "value" => "WELCOME"
                ],
           ];
        }
        else {
            $change = [
                ["key" => "public.message",
                 "value" => "LOGIN_FAILED"
                ]
            ];
        }
        return $change;
    }

    public function logout($data, $info)
    {
        Auth::logout();
        if(!Auth::check()) {
            $change = [
                ["key" => "private.loggedIn", 
                 "value" => "false"
                ],
                ["key" => "private.user", 
                 "value" => null
                ],
                ["key" => "public.message", 
                 "value" => "LOGOUT_SUCCESS"
                ],
            ];
        }
        else {
            $change = [
                ["key" => "public.message",
                 "value" => "LOGOUT_FAILED"
                ]
            ];
        }
        return $change;
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

    private function adminPublic()
    {
        $public = [];
        $public['message'] = $this->adminPublicMessage();
        return $public;
    }

    private function adminPublicMessage()
    {
        return Auth::check() ? "WELCOME" : "SIGN_IN";
    }

    private function adminPrivate()
    {
        $private = [];
        $private['display'] = "true";
        $private['load'] = "initial";
        $private['loggedIn'] = $this->adminPrivateLoggedIn();
        $private['user'] = $this->adminPrivateUser();
        return $private;
    }

    private function adminPrivateLoggedIn()
    {
        return Auth::check() ? "true" : "false";
    }

    private function adminPrivateUser()
    {
        if (Auth::check()) {
            $user = [];
            $user['name'] = Auth::user()->name;
            $user['email'] = Auth::user()->email;
            return $user;
        }
        else
        {
            return null;
        }
    }

}
