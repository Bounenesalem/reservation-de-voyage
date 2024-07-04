<?php

namespace App\Console\Commands;

use App\Http\Controllers\TripController;
use Illuminate\Console\Command;

class DeleteExpiredTrips extends Command
{
    protected $signature = 'trips:delete-expired';
    protected $description = 'حذف الرحلات التي انتهت تواريخها';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $controller = new TripController();
        $controller->deleteExpiredTrips();
    }
}
