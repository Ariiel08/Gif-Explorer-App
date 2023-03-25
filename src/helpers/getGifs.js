export const getGifs = async (category) => {
    const api_key = 'pT06SO33vkmL6hggD7I0VEAmmT6vRfAx';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=12`

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( ({id, title, images}) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url
    }));

    return gifs;
}