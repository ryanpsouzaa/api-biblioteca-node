import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase{
  constructor(){
    const mensagem = "Dados fornecidos inválidos";
    super(mensagem, 400);
  }
}

export default RequisicaoIncorreta;