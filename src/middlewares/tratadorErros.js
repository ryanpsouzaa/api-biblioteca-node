import mongoose from "mongoose";


// eslint-disable-next-line no-unused-vars
function manipuladorErros(erro ,req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    res.status(400).json({message : "Dados fornecidos inválidos"});
  }

}

export default manipuladorErros;