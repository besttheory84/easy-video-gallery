This is a simple video gallery with an overlay and share buttons built in.

Take a look at the index.html file. First, you need to create a div and assign it an id of videos

```html
<div id="videos">
...
</div>
```

Next, you will need to add an a tag for every video you would like to have in your gallery. Each a tag should include a data attribute set to the YouTube id of the video:

```html
<div id="videos">

  <a data="uT6YOI6JcRs"></a>
  <a data="ktAT6JCWCr0"></a>
  <a data="d0K436vUM4w"></a>
  <a data="PhbWIFDqQfk"></a>

</div>
```

And that's it! The included script will generate a thumbnail from the video for the user to click on. Once they click on the thumbnail, the overlay is triggered and the correct video will be displayed, as well as share icons for that video.

The nice thing about this is that the video iframes don't exist until the user chooses to watch a video, so they only get served the data that they request.

Hope you like it!
