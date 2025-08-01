import ErroBase from "./ErroBase.js";

class ErroValidacao extends ErroBase{
  constructor(erro){
    const listaErros = Object.values(erro.errors)
      .map(erro => erro.message).join("; ");
    super(`Erro(s) de Validação: ${listaErros}`, 400);
  }
}

export default ErroValidacao;