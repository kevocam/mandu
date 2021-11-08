<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subdivisions extends Model
{
    use HasFactory;

    public function divisions()
    {
        return $this->belongsTo(Divisions::class);
    }
}
