class youtube_dl
{
    constructor ()
    {
        const { exec } = require('child_process');
        this.exec = exec;
    }
    info (link)
    {
        link = decodeURI(link);
        link = "youtube-dl '"+ link +"' -s -J";
        let obj_return ={};
        this.exec(link, (error, stdout, stderr) =>{
            if (typeof JSON.parse(stdout) != null)
            {
                console.log(stdout);
            }
            else
            {
                console.log(error);
            }
        });
        return obj_return;
    }
}

module.exports = youtube_dl;
