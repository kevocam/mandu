<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Divisions;
use App\Models\Subdivisions;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Divisions::factory(50)->create();
        Subdivisions::factory(30)->create();
    }
}
