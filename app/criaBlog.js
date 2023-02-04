import { conectaAPIBlog } from "./conectaAPI.js";

const form = document.querySelector("[data-formulario]");


async function criarBlog (evento) {
    evento.preventDefault()

    const titulo = document.querySelector("[data-titulo]").value;
    const data = document.querySelector("[data-date]").value;
    const conteudo = document.querySelector("[data-conteudo]").value;

    try{
        await conectaAPIBlog.criaBlog(titulo, data, conteudo);
        window.location.href = "../pages/blogPaginaConcluido.html"
        console.log("bonde do gordão")
    }
    catch(e) {
        alert(e);
    }
}

form.addEventListener("submit", evento => criarBlog(evento));
