import express from "express";

const app = express();
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

app.get("/" , (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;