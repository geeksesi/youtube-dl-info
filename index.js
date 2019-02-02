const youtube = require('./youtubedl.js');

const dl  = new youtube();

// let link = "https://www.youtube.com/watch?v=zq-XcnjLpXI";
// let link  = "https://www.youtube.com/playlist?list=PLkOqyUCsoGE2KwOmt698IxAerJbLLws1a";
let link  = "https://www.youtube.com/playlist?list=PLkOqyUCsoGE2KwOmt698IxAerJbLLws1a";

dl.info(link);
