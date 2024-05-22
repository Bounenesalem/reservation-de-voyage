<?php

namespace App\Http\Controllers;

use App\Models\agency;
use App\Models\trip;
use Illuminate\Http\Request;

class AgencyController extends Controller
{
    public function index()
    {
        // $agency =agency::all();
        // return response()->json($agency);
        $agencies = agency::with('trips.destination')->get();
        return response()->json($agencies);
    }



    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'location' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:agencies',
            'phone' => 'required|string|min:8|max:8',
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
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'location' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|',
            'phone' => 'required|string|min:8|max:8',
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


    public function getTrips($id)
    {
        $agency = Agency::with('trips.destination')->find($id);

        if (!$agency) {
            return response()->json(['message' => 'Agency not found'], 404);
        }

        return response()->json($agency->trips);
    }

    // public function addTripToAgency(Request $request, $agencyId)
    // {
    //     // Validate the incoming request data
    //     $request->validate([
    //         'destination_id' => 'required|exists:destinations,id',
    //         'start_date' => 'required|date',
    //         'end_date' => 'required|date|after_or_equal:start_date',
    //         'price' => 'required|numeric',

    //     ]);

    //     try {
    //         // Find the agency
    //         $agency = agency::findOrFail($agencyId);

    //         // Create a new trip instance
    //         $trip = new trip($request->all());
    //         $trip->agency_id = $agencyId;

    //         // Save the trip and associate it with the agency
    //         $trip->save();

    //         // Return a success response with the newly created trip
    //         return response()->json($trip, 201);
    //     } catch (\Exception $e) {
    //         // Handle any exceptions that occur during the process
    //         return response()->json(['message' => 'Failed to add trip to agency.'], 500);
    //     }
    // }


}
