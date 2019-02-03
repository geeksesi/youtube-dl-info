const { exec } = require('child_process');
let fs         = require('fs');


function youtube_info(link, cb)
{
	let youtube_array = {};
	link              = decodeURI(link);
	link              = "youtube-dl '" + link + "' --write-auto-sub -s -J";
	exec(link, { maxBuffer : 1000 * 4096 }, (error, stdout, stderr) =>
	{
		if ( error !== null )
		{
			return false;
		}
		let data;
		try
		{
			data = JSON.parse(stdout);
		}
		catch ( e )
		{
			return false;
		}
		if ( typeof data["_type"] != null && data["_type"] === "playlist" )
		{
			youtube_array = {
				type  : "playlist",
				parts : [],
			};
			for ( let episods of data.entries )
			{
				let parts = {
					title       : episods.title,
					thumbnail   : episods.thumbnail,
					formats     : [],
				};
				for ( let sub of episods.automatic_captions.en )
				{
					if ( sub.ext === "vtt" )
					{
						parts.subtitle = sub.url;
					}
				}
				for ( let format of episods.formats )
				{
					let form = {
						id   : format.format_id,
						size : format.filesize,
						type : format.ext,
						url  : format.url,
						desc : format.format,
					};
					parts.formats.push(form);
				}
				youtube_array.parts.push(parts);
			}
		}
		else
		{
			youtube_array = {
				type  : "single",
				parts : [],

			};
			part          = {
				title       : data.title,
				thumbnail   : data.thumbnail,
				// subtitle    : "",
				formats     : [],
			};
			for ( let sub of data.automatic_captions.en )
			{
				if ( sub.ext === "vtt" )
				{
					part.subtitle = sub.url;
				}
			}
			for ( let format of data.formats )
			{
				let form = {
					id   : format.format_id,
					size : format.filesize,
					type : format.ext,
					url  : format.url,
					desc : format.format,
				};
				part.formats.push(form);
			}
			youtube_array.parts.push(part);
		}
		cb(youtube_array);
	});
}


module.exports = youtube_info;
