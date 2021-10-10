/*const apiKey = "BpXtv37gOELYTELlUmxxn4ryTHrdkp31";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then((resp) => {
    resp.json().then(({data}) =>{
        const {image_url} = data;

        const img = document.createElement("img");
        img.src = image_url;

        document.body.append(img);
    });
});*/

/*const asyncFunc = async () => {
    const apiKey = "BpXtv37gOELYTELlUmxxn4ryTHrdkp31";
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await peticion.json();
    const {image_url} = data;
    const img = document.createElement("img");
    img.src = image_url;
    document.body.append(img);
}*/

const asyncFunc = async() => {
    try {
        const apiKey = "BpXtv37gOELYTELlUmxxn4ryTHrdkp31";
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await peticion.json();
        const {image_url} = data;
        const img = document.createElement("img");
        img.src = image_url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
}

asyncFunc();















/*import { getHeroeById } from "./Data/metodo";

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject("No se encontro un heroe con esta ID");
            }
        }, 2000);
    });
    return promesa;
}


getHeroeByIdAsync(2)
                    .then(console.log)
                    .catch(console.warn);*/

