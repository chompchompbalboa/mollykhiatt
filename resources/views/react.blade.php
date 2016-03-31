<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <meta name="_app" content="{{ $app }}" />
    <meta name="_site" content="{{ $site }}" />
    <link rel="stylesheet" type="text/css" href="/css/base.css">
    <title>{{ $title }}</title>
    <script src="/js/jquery-2.1.1.min.js"></script>
  </head>
  <body>
    <section id="content-container"></section>
    <script src="/js/content-index.js"></script>
  </body>
</html>