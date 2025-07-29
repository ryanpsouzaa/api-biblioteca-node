import express from "express";
import livrosRoute from "./livrosRoutes.js";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send("Default Route"));

    app.use(express.json()); //aplica middleware JSON em todas requisicoes
    app.use(livrosRoute);  //Define rotas de livrosRoutes.js
};

export default routes;