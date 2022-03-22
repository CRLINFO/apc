//>Esta función se utiliza para conectarse a la api de 'giphi' y obtener ciertas imagenes
export const getGifs = async (category) => { 


    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&key=ppmJmE9M3OnjXuCvk1US1goJRZflHKhP`;
    //>fectch API proporciona una interfaz para recuperar recursos (incluso atravez d la red)
    const resp = await fetch(url)
    const {data} = await resp.json();

    //>Recorremos el objeto data para traernos propiedades en concreto
    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    });

    return(gifs)
    
}
