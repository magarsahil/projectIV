<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admins')->insert([
            'name' => 'Test Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
        ]);
        DB::table('sellers')->insert([
            'name' => 'Test Seller',
            'email' => 'seller@gmail.com',
            'password' => bcrypt('password'),
        ]);
    }
}
