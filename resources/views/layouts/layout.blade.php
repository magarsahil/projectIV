<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @yield('styles')
    <style>
        :root {
            --primary: #493628;
            --secondary: #AB886D;
            --accent: #D6C0B3;
            --background: #E4E0E1;
            --cream: #F5F0EB;
            --dark: #2B1F14;
        }
    </style>
</head>

<body>
    @include('sweetalert::alert')

    <x-frontend.navbar />

    @yield('content')

    <x-frontend.footer />
</body>

</html>
