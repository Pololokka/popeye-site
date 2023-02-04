//verifica a DB
async function listaBlog() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

//coloca as coisas na DB
async function criaBlog(titulo, data, conteudo) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            data: data,
            conteudo: conteudo
        })
    })
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    criaBlog,
    listaBlog
}
