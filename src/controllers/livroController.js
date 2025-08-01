import NaoEncontrado from "../erros/NaoEncontrado.js";
import livro from "../models/Livro.js";

class LivroController{

  static async listarLivros(req, res, next){
    try{
      const livros = await livro.find({});
      res.status(200).json(livros);

    }catch (erro){
      next(erro);
    }
  }

  static async listarLivroPorId(req, res, next){
    try{
      const livroId = req.params.id;
      const livroEncontrado = await livro.findById(livroId);

      if(livroEncontrado != null){
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Livro não encontrado"));
      }

    } catch (erro){
      next(erro);
    }
  }

  static async listarLivrosPorEditora(req, res, next){
    try{
      const livrosEditora = await livro.find({editora : req.query.editora });
      res.status(200).json(livrosEditora);

    }catch (erro){
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next){
    try{
      const livroId = req.params.id;
      const atualizacaoResultado = await livro.findByIdAndUpdate(livroId, req.body);

      if(atualizacaoResultado != null){
        res.status(200).json({mensagem: "Livro atualizado"});
      }else{
        next(new NaoEncontrado("Livro não encontrado"));
      }

    } catch (erro){
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next){
    try{
      let novoLivro = new livro(req.body);
      const livroResultado = await novoLivro.save(novoLivro);
            
      res.status(201).json({
        mensagem : "Livro cadastrado com sucesso",
        livro : livroResultado.toJSON()
      });

    } catch (erro){
      next(erro);
    }
  }

  static async excluirLivro(req, res, next){
    try{
      const livroId = req.params.id;
      const exclusaoResultado = await livro.findByIdAndDelete(livroId);

      if(exclusaoResultado != null){
        res.status(200).json({ mensagem: "Livro excluido"});
      }else{
        next(new NaoEncontrado("Livro não encontrado"));
      }
    
    } catch(erro){
      next(erro);
    }
  }
};

export default LivroController;