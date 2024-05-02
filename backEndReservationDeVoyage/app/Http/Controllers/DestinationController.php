<?php

namespace App\Http\Controllers;

use App\Models\destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    public function show($id){

        $destination =destination::findOrFail($id);
        return response()->json($destination);
    }
}
