<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" type="text/css" href="/css/base.css">
    <title>Molly Kay Hiatt</title>
    <script src="https://use.typekit.net/pdn0pwf.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <script src="/js/jquery-2.1.1.min.js"></script>
  </head>
  <body>
    <section id="react-container"></section>
    <script src="{{ $bundle }}"></script>
  </body>
</html>