<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Divisions extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'embajador','nivel', 'colaboradores'];
    public function subdivisions()
    {
        return $this->hasMany(Subdivisions::class);
    }
}
