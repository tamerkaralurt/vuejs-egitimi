<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Vue App</title>
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body>
<!-- VueJS datalarını göstermek için @ işareti koyuyoruz. Yoksa laravel içinde arayacaktır. @{{ message }} -->
<div id="app"></div>
<script src="{{mix('/js/app.js')}}"></script>
</body>
</html>
