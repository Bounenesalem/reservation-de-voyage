<?php

namespace App\Http\Controllers;

use App\Models\agency;
use App\Models\booking;
use App\Models\trip;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
            'payment_method' => 'required|string',
            'screenshot' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $trip = Trip::findOrFail($tripId);

        $totalPrice = $trip->price * $request->num_people;

        $user = auth()->user();

        // رفع الصورة وحفظ المسار
        $screenshotPath = $request->file('screenshot')->store('screenshots', 'public');

        $booking = Booking::create([
            'user_id' => $user->id,
            'trip_id' => $trip->id,
            'name' => $request->name,
            'num_people' => $request->num_people,
            'payment_method' => $request->payment_method,
            'status' => 'pending',
            'screenshot' => $screenshotPath,
        ]);

        return response()->json([
            'booking' => $booking,
            'trip' => $trip,
            'agency' => $trip->agency,
            'destination' => $trip->destination,
        ]);
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

// public function getBookings(Request $request)
// {
//     $agencyId = $request->query('agency_id');
//     if ($agencyId) {
//         $agency = agency::findOrFail($agencyId);
//         $bookings = booking::whereHas('trip', function ($query) use ($agencyId) {
//             $query->where('agency_id', $agencyId);
//         })->with(['user', 'trip.destination'])->get();
//     } else {
//         $bookings = booking::with(['user', 'trip.destination'])->get();
//     }

//     return response()->json($bookings);
// }

public function getBookings(Request $request)
{
    $agencyId = $request->query('agency_id');
    if ($agencyId) {
        $agency = agency::findOrFail($agencyId);
        $bookings = booking::whereHas('trip', function ($query) use ($agencyId) {
            $query->where('agency_id', $agencyId);
        })->with(['user', 'trip.destination'])->get();
    } else {
        $bookings = Booking::with(['user', 'trip.destination'])->get();
    }

    // تعديل لعرض الصورة بشكل صحيح
    foreach ($bookings as $booking) {
        if ($booking->screenshot) {
            $booking->screenshot_url = Storage::url($booking->screenshot);
        }
    }

    return response()->json($bookings);
}



// trying

public function getPendingBookings()
{
    $bookings = Booking::where('status', 'pending')->with('trip.destination', 'trip.agency')->get();
    return response()->json($bookings);
}

public function approveBooking($id)
{
    $booking = Booking::find($id);

    if (!$booking) {
        return response()->json(['message' => 'الحجز غير موجود'], 404);
    }

    $booking->status = 'confirmed';
    $booking->save();

    return response()->json(['message' => 'تمت الموافقة على الحجز']);
}

public function rejectBooking($id)
{
    $booking = Booking::find($id);

    if (!$booking) {
        return response()->json(['message' => 'الحجز غير موجود'], 404);
    }

    $booking->status = 'rejected';
    $booking->save();

    return response()->json(['message' => 'تم رفض الحجز']);
}




public function deleteExpiredBookings()
{
    $now = Carbon::now();
    $expiredBookings = Booking::whereHas('trip', function ($query) use ($now) {
        $query->where('end_date', '<', $now);
    })->get();

    foreach ($expiredBookings as $booking) {
        if ($booking->screenshot) {
            Storage::delete('public/' . $booking->screenshot);
        }
        $booking->delete();
    }

    return response()->json(['message' => 'تم حذف الحجوزات المنتهية']);
}
}
