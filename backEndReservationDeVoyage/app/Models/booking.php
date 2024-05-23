<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class booking extends Model
{
    use HasFactory;
    protected $fillable = [ 'trip_id', 'booking_date', 'status','name','num_people','user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }

    public function trip(): BelongsTo
    {
        return $this->belongsTo(trip::class);
    }


}
