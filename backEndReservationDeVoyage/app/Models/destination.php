<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class destination extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'description',
        'date',
        'budget',
    ];

    public function trips(): HasMany
    {
        return $this->hasMany(Trip::class);
    }
}
