<?php

namespace App\Console\Commands;

use App\Http\Controllers\BookingController;
use Illuminate\Console\Command;

class DeleteExpiredBookings extends Command
{
    protected $signature = 'bookings:delete-expired';
    protected $description = 'حذف الحجوزات التي انتهت تواريخ رحلاتها';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $controller = new BookingController();
        $controller->deleteExpiredBookings();
    }
}
