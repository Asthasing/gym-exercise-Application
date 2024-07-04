
export const exerciseOptions = {
    
        method: 'GET',
       
        headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          'x-rapidapi-key': 'd6ecdc620bmsh1e508ddb71435a1p1609c8jsn3442476bed6b'
          
        }
      };
      export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
        },
      };

export const fetchData = async(url , options) =>{
    const response = await fetch(url , options);
    const data = await response.json();

    return data;

}
