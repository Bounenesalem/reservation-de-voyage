<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        Commands\DeleteExpiredBookings::class,
        Commands\DeleteExpiredTrips::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->command('bookings:delete-expired')->daily();
        $schedule->command('trips:delete-expired')->daily();
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }


}
