<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;



class trip extends Model
{
    use HasFactory;
    protected $fillable = ['destination_id','Ville_de_depart','agency_id','Time','description', 'start_date', 'end_date', 'price'];

    public function destination(): BelongsTo
    {
        return $this->belongsTo(destination::class);
    }

    public function agency(): BelongsTo
    {
        return $this->belongsTo(agency::class);
    }
    public function booking():HasMany
    {
        return $this->hasMany(booking::class);
    }
}
