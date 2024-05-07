<?php

namespace App\Http\Controllers;

use App\Models\destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = destination::all();
        return response()->json($destinations);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'budget' => 'required|numeric',
        ]);

        $destination = destination::create($validatedData);

        return response()->json(['message' => 'Destination created successfully', 'data' => $destination], 201);
    }

    public function show($id)
    {
        $destination = Destination::find($id);
        if (!$destination) {
            return response()->json(['message' => 'Destination not found'], 404);
        }
        return response()->json($destination);
    }

    public function update(Request $request, $id)
    {
        $destination = Destination::find($id);
        if (!$destination) {
            return response()->json(['message' => 'Destination not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'budget' => 'required|numeric',
        ]);

        $destination->update($validatedData);

        return response()->json(['message' => 'Destination updated successfully', 'data' => $destination]);
    }

    public function destroy($id)
    {
        $destination = Destination::find($id);
        if (!$destination) {
            return response()->json(['message' => 'Destination not found'], 404);
        }

        $destination->delete();

        return response()->json(['message' => 'Destination deleted successfully']);
    }
}
