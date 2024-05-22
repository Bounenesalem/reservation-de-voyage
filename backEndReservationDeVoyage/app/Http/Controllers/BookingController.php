<?php

namespace App\Http\Controllers;

use App\Models\booking;
use App\Models\trip;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function reserve(Request $request, $id)
    {
        $trip = trip::find($id);

        if (!$trip) {
            return response()->json(['message' => 'Trip not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'numPeople' => 'required|integer|min=1',
            'booking_date'=>'required|date'
        ]);

        $reservation = new booking();
        $reservation->trip_id = $trip->id;
        $reservation->name = $validatedData['name'];
        $reservation->num_people = $validatedData['numPeople'];
        $reservation->booking_date = $validatedData['booking_date'];
        $reservation->status = 'pending'; // Default status
        $reservation->save();

        return response()->json(['message' => 'Reservation successful']);
    }



    // public function index()
    // {
    //     $booking = booking::all();
    //     return response()->json($booking);
    // }

    // public function store(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'trip_id' => 'required|exists:trips,id',
    //         'booking_date' => 'required|date',
    //         'status' => 'required|string',
    //     ]);

    //     $booking = booking::create($validatedData);

    //     return response()->json(['message' => 'booking created successfully', 'data' => $booking], 201);
    // }

    // public function show($id)
    // {
    //     $booking = booking::find($id);
    //     if (!$booking) {
    //         return response()->json(['message' => 'booking not found'], 404);
    //     }
    //     return response()->json($booking);
    // }

    // public function update(Request $request, $id)
    // {
    //     $booking = booking::find($id);
    //     if (!$booking) {
    //         return response()->json(['message' => 'booking not found'], 404);
    //     }

    //     $validatedData = $request->validate([
    //         'trip_id' => 'required|exists:trips,id',
    //         'booking_date' => 'required|date',
    //         'status' => 'required|string',

    //     ]);

    //     $booking->update($validatedData);

    //     return response()->json(['message' => 'booking updated successfully', 'data' => $booking]);
    // }

    // public function destroy($id)
    // {
    //     $booking = booking::find($id);
    //     if (!$booking) {
    //         return response()->json(['message' => 'booking not found'], 404);
    //     }

    //     $booking->delete();

    //     return response()->json(['message' => 'booking deleted successfully']);
    // }


}
