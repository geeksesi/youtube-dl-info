const youtube = require('./youtube_info.js');

// let link = "https://www.youtube.com/watch?v=zq-XcnjLpXI";
// let link  = "https://www.youtube.com/playlist?list=PLkOqyUCsoGE2KwOmt698IxAerJbLLws1a";
let link = "https://www.youtube.com/playlist?list=PLZo2FfoMkJeHk0Gs1nNajmVweHmefcI8U";

youtube(link, arr => console.log(arr));

