<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all seller IDs and category IDs
        $sellerIds = DB::table('sellers')->pluck('id')->toArray();
        $categoryIds = DB::table('categories')->pluck('id')->toArray();

        if (empty($sellerIds) || empty($categoryIds)) {
            return;
        }

        $products = [
            [
                'name' => 'Wireless Bluetooth Headphones',
                'title' => 'Premium Noise-Cancelling Bluetooth Headphones',
                'description' => 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals alike.',
                'price' => 4500.00,
                'main_image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Cotton Casual Shirt',
                'title' => 'Classic Fit Cotton Casual Shirt for Men',
                'description' => 'Made from 100% premium cotton, this casual shirt offers unmatched comfort and breathability. Features a classic collar, button-down front, and adjustable cuffs. Available in multiple colors.',
                'price' => 1800.00,
                'main_image' => 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Decorative Table Lamp',
                'title' => 'Elegant Ceramic Table Lamp with Linen Shade',
                'description' => 'Add warmth and elegance to any room with this handcrafted ceramic table lamp. Features a natural linen shade and brass finish details. Perfect for bedside tables, living rooms, or home offices.',
                'price' => 3200.00,
                'main_image' => 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'The Great Gatsby',
                'title' => 'The Great Gatsby - F. Scott Fitzgerald (Hardcover)',
                'description' => 'A timeless classic exploring themes of wealth, love, and the American Dream. This hardcover edition features a beautifully designed cover and high-quality paper, making it a perfect addition to any book collection.',
                'price' => 650.00,
                'main_image' => 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Professional Yoga Mat',
                'title' => 'Extra Thick Non-Slip Yoga Mat with Carrying Strap',
                'description' => 'Achieve your fitness goals with our premium yoga mat. Made from eco-friendly TPE material, featuring excellent cushioning and non-slip texture on both sides. Includes a free carrying strap for easy transport.',
                'price' => 2200.00,
                'main_image' => 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Organic Face Serum',
                'title' => 'Vitamin C Brightening Face Serum - 30ml',
                'description' => 'Revitalize your skin with our organic Vitamin C face serum. Formulated with natural ingredients including hyaluronic acid and vitamin E. Reduces dark spots, evens skin tone, and promotes a radiant glow.',
                'price' => 1500.00,
                'main_image' => 'https://images.unsplash.com/photo-1570194065650-d99fb4ee8e39?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1570194065650-d99fb4ee8e39?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Board Game Collection',
                'title' => 'Strategy Board Game - Settlers of Catan',
                'description' => 'The classic game of trade, build, and settle! Perfect for family game nights with 3-4 players. Includes game board, resource cards, development cards, and all necessary pieces. Average play time: 60-90 minutes.',
                'price' => 2800.00,
                'main_image' => 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1606503153255-59d8b2ba4e2f?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Car Dash Camera',
                'title' => '4K Ultra HD Dash Camera with Night Vision',
                'description' => 'Drive with confidence using our 4K dash camera. Features wide-angle lens, super night vision, parking mode, and loop recording. Easy to install with suction cup mount. Supports up to 128GB microSD card.',
                'price' => 5500.00,
                'main_image' => 'https://images.unsplash.com/photo-1534691594353-adaa10cf6f1a?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1534691594353-adaa10cf6f1a?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Smart LED TV 43"',
                'title' => '43 Inch 4K UHD Smart LED TV with Android OS',
                'description' => 'Immerse yourself in stunning 4K resolution with this smart LED TV. Features Android TV OS with built-in Chromecast, Dolby Audio, and multiple connectivity options including HDMI and USB ports.',
                'price' => 45000.00,
                'main_image' => 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Handwoven Wool Scarf',
                'title' => 'Traditional Handwoven Wool Scarf - Pure Himalayan Wool',
                'description' => 'Each scarf is handwoven by skilled artisans using traditional techniques. Made from 100% pure Himalayan wool, naturally dyed. Features intricate traditional patterns. Stay warm and stylish this winter.',
                'price' => 1200.00,
                'main_image' => 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Stainless Steel Cookware Set',
                'title' => '10-Piece Stainless Steel Cookware Set with Lids',
                'description' => 'Professional-grade stainless steel cookware set. Includes frying pans, saucepans, stockpot, and lids. Tri-ply construction for even heat distribution. Oven safe and dishwasher friendly. Lifetime warranty.',
                'price' => 8500.00,
                'main_image' => 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Fitness Tracker Watch',
                'title' => 'Smart Fitness Tracker with Heart Rate & SpO2 Monitor',
                'description' => 'Track your health 24/7 with this advanced fitness tracker. Features heart rate monitoring, blood oxygen (SpO2) tracking, step counter, sleep analysis, and 14 sport modes. Water resistant to 50m.',
                'price' => 3500.00,
                'main_image' => 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Bamboo Desk Organizer',
                'title' => 'Natural Bamboo Desk Organizer with Multiple Compartments',
                'description' => 'Keep your workspace tidy with this eco-friendly bamboo desk organizer. Features multiple compartments for pens, phones, notes, and accessories. Natural bamboo finish complements any desk decor.',
                'price' => 1800.00,
                'main_image' => 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Mountain Bike Helmet',
                'title' => 'Lightweight Mountain Bike Helmet with MIPS Technology',
                'description' => 'Stay safe on the trails with our MTB helmet featuring MIPS rotational impact protection. Adjustable fit system, 18 ventilation channels, and integrated visor. Meets international safety standards.',
                'price' => 4200.00,
                'main_image' => 'https://images.unsplash.com/photo-1557803178-6ba46cb10c20?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1557803178-6ba46cb10c20?w=400&h=300&fit=crop',
                ]),
            ],
            [
                'name' => 'Organic Green Tea Collection',
                'title' => 'Premium Organic Green Tea Gift Set - 5 Varieties',
                'description' => 'Discover the finest organic green teas from Nepal. This gift set includes 5 premium varieties: Himalayan White, Matcha, Jasmine Green, Sencha, and Genmaicha. Each variety is hand-picked and naturally processed.',
                'price' => 950.00,
                'main_image' => 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
                'images' => json_encode([
                    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop',
                ]),
            ],
        ];

        foreach ($products as $product) {
            $randomSellerId = $sellerIds[array_rand($sellerIds)];
            $randomCategoryId = $categoryIds[array_rand($categoryIds)];

            DB::table('products')->insert([
                'name' => $product['name'],
                'title' => $product['title'],
                'description' => $product['description'],
                'price' => $product['price'],
                'main_image' => $product['main_image'],
                'images' => $product['images'],
                'seller_id' => $randomSellerId,
                'category_id' => $randomCategoryId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
