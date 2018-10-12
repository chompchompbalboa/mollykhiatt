<?php

Route::group(['middleware' => ['web']], function () {

  $site = function() {

    Route::get('/data/seed', 'DataController@seed');
    Route::get('/data/site', 'DataController@site');

    Route::get('/{optional?}/{optional2?}', function() {
      return view('site');
    });

  };
  Route::group(['domain' => 'mollykhiatt.com'], $site);
  Route::group(['domain' => 'mollyhiatt.com'], $site);
  Route::group(['domain' => 'mollyworth.com'], $site);
  Route::group(['domain' => 'mollyhiatt.local'], $site);

});
