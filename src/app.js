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

export default app;

