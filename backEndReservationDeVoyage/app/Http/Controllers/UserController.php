<?php

namespace App\Http\Controllers;

use App\Models\booking;
use App\Models\User;
use Illuminate\Http\Request;
// use app\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|string|min:8',
        ]);

        $user->update($request->only(['name', 'email', 'password']));

        return response()->json($user);
    }

    public function destroy($id)
    {

        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'user not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'user deleted successfully']);



    }

    // public function getUserBookings(Request $request)
    // {
    //     $user = $request->user();

    //     $bookings = booking::where('user_id', $user->id)->with('trip.destination', 'trip.agency')->get();

    //     return response()->json($bookings);
    // }
}
