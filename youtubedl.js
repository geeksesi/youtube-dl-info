const {exec} = require('child_process');
let fs = require('fs');

function youtube_info(link) {
    let youtube_array = {};
    link = decodeURI(link);
    link = "youtube-dl '" + link + "' -s -J";
    exec(link, {maxBuffer: 1000 * 4096}, (error, stdout, stderr) => {

        if (error !== null) {
            return false;
        }
        let data;
        try {
            data = JSON.parse(stdout);
        } catch (e) {
            return false;
        }
        if (typeof data["_type"] != null && data["_type"] === "playlist") {
            for (let episods of data.entries) {
                let parts = {
                    title: episods.title,
                    thumbnail: episods.thumbnail,
                    description: episods.description,
                    formats: []
                };
                for (let format of data.entries.formats) {
                    let form = {
                        id: format.format_id,
                        size: format.filesize,
                        type: format.ext,
                        url: format.url,
                        desc: format.format
                    };
                }
                console.log(episods.id);
            }
        }
    });
}

module.exports = youtube_info;
