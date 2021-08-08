<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('vendor/fontawesome-free/css/all.min.css') }}">
    <title>Martin Manderveld</title>
</head>
<body>
    
    @include('partial.navbar')
    @include('partial.start')
    @include('partial.about')
    @include('partial.parcours')

    <script src="{{asset('js/main.js')}}"></script>
</body>
</html>