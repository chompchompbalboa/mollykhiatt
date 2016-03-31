<?php

namespace App\Helpers;

class Helper
{
    /*
    * Fetch JSON
    *
    * Get resources from a JSON file and return it as an array
    */
    public static function fetchJSON($location)
    {
        $contents= file_get_contents($location);
        $json = json_decode($contents);

        return $json;
    }

    /* 
    * Component Generator
    *
    * Build a set of boilerplate components based off an input source
    */
    public static function generator($input)
    {
        $component = file_get_contents('../app/React/boilerplate/Placeholder.jsx');
        $new = $input->components;
        $location = $input->location;
        foreach($input->components as $current)
        {
            $string = str_replace("Placeholder", $current, $component);
            $file = file_put_contents($location.'/'.$current.'.jsx', $string);
        }
        return "true";
    }
}