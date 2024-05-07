<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class trip extends Model
{
    use HasFactory;
    protected $fillable = ['destination_id', 'start_date', 'end_date', 'price'];

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }

    public function agency(): BelongsTo
    {
        return $this->belongsTo(agency::class);
    }
}
