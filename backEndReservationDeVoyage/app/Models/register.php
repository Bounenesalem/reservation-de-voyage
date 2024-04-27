<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class register extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'nni',
        'dateOfBirth',
        'placeOfBirth',
        'gender'
    ];
    protected $hidden=[
        'password',
        'remember_token',
    ];
    public $timestamps=false;

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
