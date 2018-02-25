<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/base.css">
    <title>Molly Worth</title>
    <script src="/js/jquery-2.1.1.min.js"></script>
    <script src="/js/mousewheel.min.js"></script>
  </head>
  <body>
    <section id="react-container"></section>
    <script src="{{ $bundle }}"></script>
  </body>
</html>