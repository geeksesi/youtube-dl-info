# YoutubeInfo
a simple library for get a detail of an youtube link like :
- is playlist ?
- download link 
- auto generate subtitle link
- title
- all formats

## how use
### first you need :
- nodejs
- need support of [this](https://nodejs.org/api/child_process.html)
- youtube-dl : [youtube-dl](https://github.com/rg3/youtube-dl)

### usage :
```$javascipt
const youtube = require('youtube_info.js');

// single file video
// let link = "https://www.youtube.com/watch?v=zq-XcnjLpXI";
// playlist
let link = "https://www.youtube.com/playlist?list=PLZo2FfoMkJeHk0Gs1nNajmVweHmefcI8U";

youtube(link, (arr) => console.log(arr));
```
### output :
it's simple just a Json object

## npm :
```$xslt
npm i speedster-youtube-info
```

## license : 
MIT :) 

