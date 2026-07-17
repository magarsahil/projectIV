<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Category Information')
                    ->schema([
                        TextInput::make('name')
                            ->required(),
                        TextInput::make('slug')
                            ->required(),
                        Section::make('Category Image')
                            ->icon(Heroicon::Photo)
                            ->schema([
                                FileUpload::make('image')
                                    ->label('Category Image')
                                    ->image()
                                    ->required(),
                            ])->columnSpanFull(),
                    ])->columns(2),
            ])->columns(1);
    }
}
