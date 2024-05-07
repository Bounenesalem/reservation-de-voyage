<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class booking extends Model
{
    use HasFactory;
    protected $fillable = ['person_id', 'destination_id', 'booking_date', 'status'];

    // public function user(): BelongsTo
    // {
    //     return $this->belongsTo(User::class);
    // }

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }
}
