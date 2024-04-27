<?php

namespace App\Http\Controllers;

use App\Models\register;
use Illuminate\Http\Request;
use illuminate\Support\Facades\Hash;

class registerController extends Controller
{
    function register(Request $req){
        $register=new register;
        $register->name=$req->input('name');
        $register->email=$req->input('email');
        $register->password=$req->input('password');
        $register->address=$req->input('address');
        $register->nni=$req->input('nni');
        $register->dateOfBirth=$req->input('dateOfBirth');
        $register->placeOfBirth=$req->input('placeOfBirth');
        $register->gender=$req->input('gender');
        $register->save();

        return $register;
    }
    function login(Request $req){
        $register=register::where('email',$req->email)->first();
        if($req->password!=$register->password){
            return "email or password incorrect";
        }
        return $register;
    }
}
