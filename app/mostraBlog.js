import { conectaAPIBlog } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

console.log("bonde do gordão");

export default function constroiPost (titulo, data, conteudo) {
    const post = document.createElement("div");
    post.className = "postagem__container--blog";
    post.innerHTML = `
        <h3 class="titulo titulo__postagem">${titulo}</h3>
        <p class="texto data__postagem">${data}</p>
        <p class="texto texto__postagem">${conteudo}</p>
    `

    console.log("bonde do gordão eae");
    return post;
}

async function listaBlog () {
    try {
        const listaAPIBlog = await conectaAPIBlog.listaBlog();
        listaAPIBlog.forEach(elemento => lista.appendChild(
            constroiPost(elemento.titulo, elemento.data, elemento.conteudo)))
            console.log("eu só quero abraçoooo");
    }
    catch {
        lista.innerHTML = `<h3 class="titulo titulo__postagem">Não foi possível carregar este conteudo</h3>`
    }
}

listaBlog();
