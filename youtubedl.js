const { exec } = require('child_process');
let fs         = require('fs');


function youtube_info(link)
{
	let youtube_array = {};
	link              = decodeURI(link);
	link              = "youtube-dl '" + link + "' -s -J";
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
				type : "play_list",
				parts : []
			};
			for ( let episods of data.entries )
			{
				let parts = {
					title       : episods.title,
					thumbnail   : episods.thumbnail,
					description : episods.description,
					formats     : [],
				};
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
				title       : data.title,
				thumbnail   : data.thumbnail,
				description : data.description,
				formats     : [],
			};
			for ( let format of data.formats )
			{
				let form = {
					id   : format.format_id,
					size : format.filesize,
					type : format.ext,
					url  : format.url,
					desc : format.format,
				};
				youtube_array.formats.push(form);
			}
		}
		return youtube_array;
	});
}


module.exports = youtube_info;
