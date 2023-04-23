# [Javascript] HLS流网页播放

家里有个摄像头想在网页上查看

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://unpkg.com/video.js/dist/video-js.min.css" rel="stylesheet">
    <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
    <!-- <script src="https://unpkg.com/browse/@videojs/http-streaming@1.11.2/dist/videojs-http-streaming.min.js"></script> -->
</head>
<body>
    <video-js meted="meted" autoplay playsinline="true" id="vid1" width="600px" height="600px" class="vjs-default-skin" controls>
        <source
           src="http://10.0.0.1:8080/live/id/1003000$118/substream/2.m3u8"
           type="application/x-mpegURL">
      </video-js>
      <script>
      var player = videojs('vid1');
      player.play();
      </script>
</body>
</html>
```
