// const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=50';
const API= 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmS75G-98QihSusY7NfCZtw&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById('content')



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e21b3e6d4fmsh05a0a5f081dc601p16140ejsn53a488ab27eb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e21b3e6d4fmsh05a0a5f081dc601p16140ejsn53a488ab27eb',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };


async function fetchData(urlApi){
    const response = await fetch(API, options);
    const data = await response.json();
    return data
}

(async()=>{
    try {
        const video = await fetchData(API); //Esto obtiene el valor de la api y lo guarda en la constante video en caso de que se cumpla la respuesta de la promesa
        let view = `${video.items.map(video=>`
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>`
        ).slice(0,16).join('')
    }`;
    content.innerHTML = view;
    } catch (error) {
        console.log(error);
        // alert(error)
    }
})();

