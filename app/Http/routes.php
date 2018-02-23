<?php
Route::group(['middleware' => ['web']], function () {

    /*
    |--------------------------------------------------------------------------
    | App
    |--------------------------------------------------------------------------
    */
    $site = function() {
        Route::any('/{optional?}', [
            "as" => "site_home",
            "uses" => "SiteController@home",
        ]);

        Route::post('/react/{action}/{info?}', [
            "as" => "site_react",
            "uses" => "SiteReactController@react",
        ]);

        Route::any('/{optional?}/{optional2?}', [
            "as" => "site_home",
            "uses" => "SiteController@home",
        ]);
    };

    Route::group(['domain' => 'mollykhiatt.com'], $site);
    Route::group(['domain' => 'mollyhiatt.com'], $site);
    Route::group(['domain' => 'mollyworth.com'], $site);
    Route::group(['domain' => 'mollyhiatt.local'], $site);
});
