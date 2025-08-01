import express from "express";
import conectarDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/tratadorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectarDataBase();

conexao.on("error", (erro) =>{
  console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
  console.log("Conexao com DB estabelecida");
});


const app = express();
routes(app);

app.use(manipulador404);

app.use(manipuladorErros);
export default app;

