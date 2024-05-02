<?php

namespace App\Http\Controllers;

use App\Models\destination;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $popularDestination=destination::get();
        return response()->json($popularDestination);
    }
}
