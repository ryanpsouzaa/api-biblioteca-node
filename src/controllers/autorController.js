import NaoEncontrado from "../erros/NaoEncontrado.js";
import {autor}  from "../models/Autor.js";

class AutorController{

  static async listarAutores(req, res, next){
    try{
      const autores = await autor.find({});
      res.status(200).json(autores);

    }catch (erro){
      next(erro);
    }
  }

  static async listarAutorPorId(req, res, next){
    try{
      const autorId = req.params.id;
      const autorEncontrado = await autor.findById(autorId);

      if(autorEncontrado != null){
        res.status(200).json({autorEncontrado});
      } else {
        next(new NaoEncontrado("Autor não encontrado"));
      }

    } catch (erro){
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next){
    try{
      const autorCadastrado = await autor.create(req.body);
      res.status(201).json({
        mensagem : "Autor cadastrado com sucesso",
        autor: autorCadastrado
      });

    } catch (erro){
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next){
    try{
      const autorId = req.params.id;
      const atualizacaoResultado = await autor.findByIdAndUpdate(autorId, req.body);

      if(atualizacaoResultado != null){
        res.status(200).json({
          mensagem : "Autor atualizado"
        });
      } else{
        next(new NaoEncontrado("Autor não encontrado"));
      }
      
    } catch (erro){
      next(erro);
    }
  }

  static async excluirAutor(req, res, next){
    try{
      const autorId = req.params.id;
      const exclusaoResultado = await autor.findByIdAndDelete(autorId);

      if(exclusaoResultado != null){
        res.status(200).json({
          mensagem : "Autor excluido com sucesso"
        });

      }else{
        next(new NaoEncontrado("Autor não encontrado"));
      }

    } catch (erro){
      next(erro);
    }
  }
}

export default AutorController;