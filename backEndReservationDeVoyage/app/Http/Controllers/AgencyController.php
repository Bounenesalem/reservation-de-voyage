<?php

namespace App\Http\Controllers;

use App\Models\agency;
use Illuminate\Http\Request;

class AgencyController extends Controller
{
    public function index()
    {
        $agency =agency::all();
        return response()->json($agency);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
        ]);

        $agency = agency::create($validatedData);

        return response()->json(['message' => 'agency created successfully', 'data' => $agency], 201);
    }

    public function show($id)
    {
        $agency = agency::find($id);
        if (!$agency) {
            return response()->json(['message' => 'agency not found'], 404);
        }
        return response()->json($agency);
    }

    public function update(Request $request, $id)
    {
        $agency = agency::find($id);
        if (!$agency) {
            return response()->json(['message' => 'agency not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
        ]);

        $agency->update($validatedData);

        return response()->json(['message' => 'agency updated successfully', 'data' => $agency]);
    }

    public function destroy($id)
    {
        $agency = agency::find($id);
        if (!$agency) {
            return response()->json(['message' => 'agency not found'], 404);
        }

        $agency->delete();

        return response()->json(['message' => 'agency deleted successfully']);
    }

}
