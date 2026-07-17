<?php

namespace App\Filament\Seller\Resources\Sellers\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class SellerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Group::make()
                    ->schema([
                        Section::make('Seller Information')
                            ->schema([
                                TextInput::make('name')
                                    ->required(),
                                TextInput::make('email')
                                    ->label('Email address')
                                    ->email()
                                    ->required(),
                                TextInput::make('shop_name')
                                    ->required(),
                                TextInput::make('contact')
                                    ->required(),
                                TextInput::make('registration_number')
                                    ->label('Registration Number')
                                    ->columnSpanFull()
                                    ->required(),
                            ])->columns(2),
                        Section::make('Upload Documents')
                            ->icon(Heroicon::Photo)
                            ->schema([
                                FileUpload::make('citizenship_photo')
                                    ->label('Citizenship Photo')
                                    ->image()
                                    ->required(),
                                FileUpload::make('image')
                                    ->label('Company Registeration Image')
                                    ->image()
                                    ->required()
                                    ->acceptedFileTypes(
                                        [
                                            'image/jpeg',
                                            'image/png',
                                            'image/jpg',
                                        ]
                                    ),
                            ]),
                    ])->columns(2),

                Section::make('Khalti Secret Key')
                    ->icon(Heroicon::LockClosed)
                    ->schema([
                        TextInput::make('khalti_secrect_key')
                            ->label('Khalti Secret Key'),
                    ]),
            ])->columns(1);
    }
}
