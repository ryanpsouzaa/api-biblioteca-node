import express from "express";
import livrosRoute from "./livrosRoutes.js";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send("Default Route"));

    app.use(express.json(), livrosRoute);
};

export default routes;