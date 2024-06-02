<?php

namespace App\Http\Controllers;

use App\Models\agency;
use App\Models\booking;
use App\Models\trip;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = booking::with(['user' ,'trip.destination', 'trip.agency'])->get();
        return response()->json($bookings);
    }

    public function show($id)
    {
        return booking::with('trip')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'num_people' => 'required|integer|min:1',
            'trip_id' => 'required|exists:trips,id',
        ]);

        return booking::create($validatedData);
    }

    public function update(Request $request, $id)
    {
        $booking = booking::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'status' => 'sometimes|required|string|max:255',
            'num_people' => 'sometimes|required|integer|min:1',
            'trip_id' => 'sometimes|required|exists:trips,id',
        ]);

        $booking->update($validatedData);

        return $booking;
    }

    public function destroy($id)
    {
        Booking::destroy($id);
        return response()->json(['message' => 'Booking deleted successfully']);
    }

    public function reserve(Request $request, $tripId)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'num_people' => 'required|integer|min:1',
        ]);

        // Retrieve the trip
        $trip = trip::findOrFail($tripId);

        // Calculate the total price
        $totalPrice = $trip->price * $request->num_people;

        // Create the booking
        $booking = Booking::create([
            'name' => $request->name,
            'status' => 'confirmed',
            'num_people' => $request->num_people,
            'total_price' => $totalPrice, // Add the total price here
            'trip_id' => $tripId,
            'user_id' => auth()->id(), // Add this line to save user ID
        ]);

        return response()->json(['message' => 'Booking successful!', 'booking' => $booking], 201);
    }


    public function userBookings(User $user)
    {
        $bookings = booking::where('user_id', $user->id)->with(['trip.destination', 'trip.agency'])->get();
        return response()->json($bookings);
    }

    public function cancel(booking $reservation)
    {
        if ($reservation->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $reservation->status = 'Cancelled';
        $reservation->save();

        return response()->json(['message' => 'Reservation cancelled successfully', 'reservation' => $reservation]);
    }

// BookingController.php

public function getBookings(Request $request)
{
    $agencyId = $request->query('agency_id');
    if ($agencyId) {
        $agency = agency::findOrFail($agencyId);
        $bookings = booking::whereHas('trip', function ($query) use ($agencyId) {
            $query->where('agency_id', $agencyId);
        })->with(['user', 'trip.destination'])->get();
    } else {
        $bookings = booking::with(['user', 'trip.destination'])->get();
    }

    return response()->json($bookings);
}

}
