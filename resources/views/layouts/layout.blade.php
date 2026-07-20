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
            --primary: #2F3193;
            /* navbar, headings, primary buttons, links */
            --primary-dark: #22236A;
            /* hover/active states */
            --primary-light: #EAEAF4;
            /* soft section bg, selected states */

            --secondary: #D91E26;
            /* CTAs, badges, highlights */
            --secondary-dark: #B31C22;
            --secondary-light: #FCEBEB;

            --accent-gold: #f7c933;
            /* optional — ratings, premium badges only */

            --ink: #242021;
            /* body text, headings */
            --muted: #6E6B68;
            /* captions, secondary text */
            --cream: #F8F5F0;
            /* alternating section backgrounds */
            /* dividers, input outlines */
            --background: #FFFFFF;
        }

        * {
            font-family: 'Times New Roman', Times, serif;
        }
    </style>

</head>

<body>
    @include('sweetalert::alert')

    <x-frontend.navbar />

    @yield('content')

    <x-frontend.footer />

    @yield('scripts')
</body>

</html>
