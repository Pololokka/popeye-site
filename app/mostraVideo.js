import { conectaAPIVideo } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

console.log("bonde do gordão eae");

export default function constroiVideo (titulo, descricao, codigo) {
    const post = document.createElement("div")
    post.className = "conteudo__video"
    post.innerHTML = `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${codigo}" 
        title="${titulo}" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <div class="texto__video">
            <h3 class="titulo titulo__video">${titulo}</h3>
            <p class="texto texto__video">${descricao}</p>
        </div>
    `
    console.log("bonde do gordão");
    return post;
}

async function listaVideo () {
    try {
        const listaAPIVideo = await conectaAPIVideo.listaVideo();
        listaAPIVideo.forEach(elemento => lista.appendChild(
            constroiVideo(elemento.titulo, elemento.descricao, elemento.codigo)))
            console.log("eu só quero abraçoooo")
    }
    catch {
        lista.innerHTML = `<h3 class="titulo titulo__postagem">Não foi possível carregar este conteudo</h3>`
    }
}

listaVideo();
