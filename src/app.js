import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        "id" : 1,
        "titulo" : "código limpo"
    },
    {
        "id" : 2,
        "titulo" : "Padroes de Projeto"
    }
];

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/" , (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

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