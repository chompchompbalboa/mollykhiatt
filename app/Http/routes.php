<?php
Route::group(['middleware' => ['web']], function () {

    /*
    |--------------------------------------------------------------------------
    | Authentication
    |--------------------------------------------------------------------------
    */

    //Route::auth();

    //Route::get('/home', 'HomeController@index');


    /*
    |--------------------------------------------------------------------------
    | Admin
    |--------------------------------------------------------------------------
    */

    $admin = function() {
        Route::any('/', [
            "as" => "admin_home",
            "uses" => "AdminController@home",
        ]);

        Route::post('/react/{action}/{info?}', [
            "as" => "admin_react",
            "uses" => "AdminReactController@react",
        ]);
    };

    Route::group(['domain' => 'admin.mollykhiatt.com'], $admin);
    Route::group(['domain' => 'admin.mollyhiatt.com'], $admin);
    Route::group(['domain' => 'admin.mollykhiatt.local'], $admin);

    /*
    |--------------------------------------------------------------------------
    | App
    |--------------------------------------------------------------------------
    */

    $site = function() {
        Route::any('/', [
            "as" => "site_home",
            "uses" => "SiteController@home",
        ]);

        Route::post('/react/{action}/{info?}', [
            "as" => "site_react",
            "uses" => "SiteReactController@react",
        ]);
    };

    Route::group(['domain' => 'mollykhiatt.com'], $site);
    Route::group(['domain' => 'mollyhiatt.com'], $site);
    Route::group(['domain' => 'mollykhiatt.local'], $site);
});
