<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class booking extends Model
{
    use HasFactory;
    protected $fillable = ['trip_id', 'name', 'num_people', 'status','user_id',];

    public function trip()
    {
        return $this->belongsTo(trip::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
