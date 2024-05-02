<?php

namespace App\Http\Controllers;

use App\Models\destination;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request){

        $destinations=destination::where('name','like','%'.$request->input('destination').'%')
        ->where('date',$request->input('date'))
        ->where('budget',$request->input('budget'))->get();

        return response()->json($destinations);

    }
}
