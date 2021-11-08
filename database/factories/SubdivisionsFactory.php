<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SubdivisionsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->sentence(2),
            'divisions_id' => rand(1,40),
        ];
    }
}
