<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Seed extends Eloquent
{
    protected $collection = 'seeds';
    protected $primaryKey = '_id';
}
