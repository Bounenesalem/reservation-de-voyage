<?php

namespace App\Http\Controllers;

use App\Models\agency;
use App\Models\trip;
use Illuminate\Http\Request;


class TripController extends Controller
{

    public function index()
    {
        $trip = trip::with('destination','agency')->get();
        return response()->json($trip);
        // $trip = trip::all();
        // return response()->json($trip);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'destination_id' => 'required|exists:destinations,id',
            'agency_id' => 'required|exists:agencies,id',
            'description'=>'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'price'=>'required|numeric|min:0',

        ]);
        // if ($validatedData->fails()){
        //     return response()->json(['errors'=>$validatedData->errors()],422);
        // }

        $trip = trip::create($validatedData);

        return response()->json(['message' => 'trip created successfully', 'data' => $trip], 201);
    }

    public function show($id)
    {
        $trip = trip::find($id);
        if (!$trip) {
            return response()->json(['message' => 'trip not found'], 404);
        }
        return response()->json( $trip->load(['agency', 'destination']));
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
            'description' => 'required|string|max:255',
            'startDate' => 'required|date',
            'endDate' => 'required|date',
            'price' => 'required|numeric',
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


//     public function addTripToAgency(Request $request, $agencyId)
//     {
//         // Validate the incoming request data
//         $request->validate([
//             'destination_id' => 'required|exists:destinations,id',
//             'start_date' => 'required|date',
//             'end_date' => 'required|date|after_or_equal:start_date',
//             'price' => 'required|numeric',
//             // 'availability' => 'required|integer', // Uncomment if 'availability' is also required
//         ]);

//         try {
//             // Find the agency
//             $agency = agency::findOrFail($agencyId);

//             // Create a new trip instance
//             $trip = new trip();
//             $trip->destination_id = $request->input('destination_id');
//             $trip->start_date = $request->input('start_date');
//             $trip->end_date = $request->input('end_date');
//             $trip->price = $request->input('price');
//             // Set 'availability' if it's required

//             // Save the trip and associate it with the agency
//             $agency->trips()->save($trip);

//             // Return a success response with the newly created trip
//             return response()->json($trip, 201);
//         } catch (\Exception $e) {
//             // Handle any exceptions that occur during the process
//             return response()->json(['message' => 'Failed to add trip to agency.'], 500);
//         }
// }






      // public function index()
    // {
    //     // return trip::with('agency')->get();
    //     $trip = trip::all();
    //    return response()->json($trip);
    // }

    // public function show($id)
    // {
    //     return trip::with('agency')->findOrFail($id);
    // }

    // public function store(Request $request)
    // {
    //     $trip = trip::create($request->all());
    //     return response()->json($trip, 201);
    // }

    // public function update(Request $request, $id)
    // {
    //     $trip = trip::findOrFail($id);
    //     $trip->update($request->all());
    //     return response()->json($trip, 200);
    // }

    // public function delete($id)
    // {
    //     $trip = trip::findOrFail($id);
    //     $trip->delete();
    //     return response()->json(null, 204);
    // }



}
