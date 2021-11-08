<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DivisionsFactory extends Factory
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
            'embajador' => $this->faker->name,
            'div_sup' => $this->faker->sentence(2),
            'nivel' => rand(1,10),
            'colaboradores' => rand(1,10),
        ];
    }
}
