<?php

namespace App\Http\Controllers;

use App\Models\trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function index()
    {
        $trip = trip::all();
        return response()->json($trip);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'destination_id' => 'required|exists:destinations,id',
            'agency_id' => 'required|exists:agencies,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date',

        ]);

        $trip = trip::create($validatedData);

        return response()->json(['message' => 'trip created successfully', 'data' => $trip], 201);
    }

    public function show($id)
    {
        $trip = trip::find($id);
        if (!$trip) {
            return response()->json(['message' => 'trip not found'], 404);
        }
        return response()->json($trip);
    }

    public function update(Request $request, $id)
    {
        $trip = trip::find($id);
        if (!$trip) {
            return response()->json(['message' => 'trip not found'], 404);
        }

        $validatedData = $request->validate([
            'destination_id' => 'required|exists:destinations,id',
            'agency_id' => 'required|exists:agencies,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        $trip->update($validatedData);

        return response()->json(['message' => 'trip updated successfully', 'data' => $trip]);
    }

    public function destroy($id)
    {
        $trip = trip::find($id);
        if (!$trip) {
            return response()->json(['message' => 'trip not found'], 404);
        }

        $trip->delete();

        return response()->json(['message' => 'trip deleted successfully']);
    }

}
