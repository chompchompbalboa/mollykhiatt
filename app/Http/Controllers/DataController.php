<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DataController extends Controller
{

  public function __construct(Request $request)
  {
    $this->request = $request;
  }

  /*
  * The seed holds all of the data the site can display. It's currently a single
  * json file because I didn't have the time to figure out an issue with MongoDB 
  * on a new droplet after the original droplet bit the dust. If I get some time,
  * dig into the MongoDB issue again. 
  */
  public function seed()
  {
    return file_get_contents(getcwd().'/assets/seed.json');
  }

  /*
  * On the front end, the site store holds all of the config values for the site.
  * This function returns the default config values for the store.
  */
  public function site()
  {
    $data = json_decode($this->request->input('data'));
    $site = json_decode(file_get_contents(getcwd().'/assets/Site/site.json'));
    $site->container = [
      'width' => [
        'sm'=> '1',
        'md'=> '1',
        'lg'=> '1'
      ]
    ];
    $site->url = $data->url[0] === "/" ? substr($data->url, 1) : $data->url;
    return json_encode($site);
  }

}
