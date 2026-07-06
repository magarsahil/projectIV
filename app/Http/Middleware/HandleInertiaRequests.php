<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class HandleInertiaRequests
{
    protected $rootView = 'app';

    public function handle(Request $request, Closure $next): Response
    {
        Inertia::share([
            'ziggy' => function () {
                return [
                    'url' => config('app.url'),
                    'routes' => [],
                ];
            },
        ]);

        return $next($request);
    }
}
