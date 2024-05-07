<?php

namespace App\Http\Controllers;

use App\Models\booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $booking = booking::all();
        return response()->json($booking);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'trip_id' => 'required|exists:trips,id',
            'booking_date' => 'required|date',
            'status' => 'required|string',
        ]);

        $booking = booking::create($validatedData);

        return response()->json(['message' => 'booking created successfully', 'data' => $booking], 201);
    }

    public function show($id)
    {
        $booking = booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'booking not found'], 404);
        }
        return response()->json($booking);
    }

    public function update(Request $request, $id)
    {
        $booking = booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'booking not found'], 404);
        }

        $validatedData = $request->validate([
            'trip_id' => 'required|exists:trips,id',
            'booking_date' => 'required|date',
            'status' => 'required|string',

        ]);

        $booking->update($validatedData);

        return response()->json(['message' => 'booking updated successfully', 'data' => $booking]);
    }

    public function destroy($id)
    {
        $booking = booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'booking not found'], 404);
        }

        $booking->delete();

        return response()->json(['message' => 'booking deleted successfully']);
    }
}
