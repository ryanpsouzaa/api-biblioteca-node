import express from "express";
import conectarDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectarDataBase();

conexao.on("error", (erro) =>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("Conexao com DB estabelecida");
});


const app = express();
routes(app);

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluido com sucesso");
})

export default app;

