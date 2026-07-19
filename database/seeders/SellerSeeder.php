<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sellers = [
            [
                'name' => 'Ramesh Sharma',
                'email' => 'ramesh@example.com',
                'shop_name' => 'Ramesh Electronics Hub',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9801234567',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Sita Pokharel',
                'email' => 'sita@example.com',
                'shop_name' => 'Sita Fashion House',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9802345678',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Hari Adhikari',
                'email' => 'hari@example.com',
                'shop_name' => 'Adhikari Home & Decor',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9803456789',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Gita Thapa',
                'email' => 'gita@example.com',
                'shop_name' => 'Thapa Bookstore',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9804567890',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Krishna Gurung',
                'email' => 'krishna@example.com',
                'shop_name' => 'Gurung Sports World',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9805678901',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Anita Lama',
                'email' => 'anita@example.com',
                'shop_name' => 'Lama Beauty Studio',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9806789012',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Bikram KC',
                'email' => 'bikram@example.com',
                'shop_name' => 'KC Toy Emporium',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9807890123',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Sunita Rai',
                'email' => 'sunita@example.com',
                'shop_name' => 'Rai Auto Parts',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9808901234',
                'expired_date' => now()->addYear(),
            ],
            [
                'name' => 'Prakash Oli',
                'email' => 'prakash@example.com',
                'shop_name' => 'Oli Organic Market',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'pending',
                'contact' => '9809012345',
                'expired_date' => null,
            ],
            [
                'name' => 'Maya Tamang',
                'email' => 'maya@example.com',
                'shop_name' => 'Tamang Handicrafts',
                'registration_number' => 'REG-' . Str::random(8),
                'status' => 'active',
                'contact' => '9800123456',
                'expired_date' => now()->addMonths(6),
            ],
            [
                'name' => 'Test Seller',
                'email' => 'seller@gmail.com',
                'shop_name' => 'Test Shop',
                'registration_number' => 'REG-TEST001',
                'status' => 'active',
                'contact' => '9812345678',
                'expired_date' => now()->addYear(),
            ],
        ];

        foreach ($sellers as $seller) {
            DB::table('sellers')->insert([
                'name' => $seller['name'],
                'email' => $seller['email'],
                'password' => bcrypt('password'),
                'shop_name' => $seller['shop_name'],
                'registration_number' => $seller['registration_number'],
                'status' => $seller['status'],
                'contact' => $seller['contact'],
                'expired_date' => $seller['expired_date'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
