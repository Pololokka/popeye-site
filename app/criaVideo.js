import { conectaAPIVideo } from "./conectaAPI.js";

const form = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const codigo = document.querySelector("[data-codigo]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = document.querySelector("[data-descricao]").value;

    try{
        evento.preventDefault();
        await conectaAPIVideo.criaVideo(titulo, descricao, codigo);
        window.location.href = "../pages/videoPaginaConcluido.html"
        console.log("bonde do gordão")
    } 
    catch(e) {
        alert(e)
    }
}

form.addEventListener('submit', evento => criarVideo(evento));
