<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Electronics',
                'slug' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1550009158-9ebf2d88a2c4?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Clothing & Fashion',
                'slug' => 'clothing-fashion',
                'image' => 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Home & Garden',
                'slug' => 'home-garden',
                'image' => 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Books & Stationery',
                'slug' => 'books-stationery',
                'image' => 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Sports & Outdoors',
                'slug' => 'sports-outdoors',
                'image' => 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Health & Beauty',
                'slug' => 'health-beauty',
                'image' => 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Toys & Games',
                'slug' => 'toys-games',
                'image' => 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=400&h=300&fit=crop',
            ],
            [
                'name' => 'Automotive',
                'slug' => 'automotive',
                'image' => 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop',
            ],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'slug' => $category['slug'],
                'image' => $category['image'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
