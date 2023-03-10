//verifica a DB
async function listaBlog() {
    const conexao = await fetch("http://localhost:3000/blog");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function listaVideo() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//coloca as coisas na DB do blog
async function criaBlog(titulo, data, conteudo) {
    const conexao = await fetch("http://localhost:3000/blog", {
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
        throw new Error("Não foi possível fazer o post")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, codigo) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            codigo: codigo
        })
    })
    if(!conexao.ok) {
        throw new Error("Não foi possível fazer o post")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPIBlog = {
    criaBlog,
    listaBlog
}

export const conectaAPIVideo = {
    criaVideo,
    listaVideo
}
