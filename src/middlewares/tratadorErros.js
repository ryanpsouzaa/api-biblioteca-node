import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";


// eslint-disable-next-line no-unused-vars
function manipuladorErros(erro ,req, res, next){
  console.log("É ValidationError?", erro instanceof mongoose.Error.ValidationError);
  console.log(erro);

  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  
  }else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res);

  }else if(erro instanceof NaoEncontrado){
    erro.enviarResposta(res);

  }else{
    new ErroBase().enviarResposta(res);

  }
}
export default manipuladorErros;