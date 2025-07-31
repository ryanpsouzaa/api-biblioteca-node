import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController{

  static async listarLivros(req, res){
    try{
      const livros = livro.find({});
      res.status(200).json(livros);

    }catch (erro){
      res.status(500).json({message : `${erro.message} - Erro interno no Servidor.`});
    }
  }

  static async listarLivroPorId(req, res){
    try{
      const livroId = req.params.id;
      const livroEncontrado = await livro.findById(livroId);

      res.status(200).json(livroEncontrado);

    } catch (error){
      res.status(404).json({ message: `${error.message} - Livro não encontrado.` });
    }
  }

  static async listarLivrosPorEditora(req, res){
    try{
      const livrosEditora = await livro.find({editora : req.query.editora });
      res.status(200).json(livrosEditora);

    }catch (erro){
      res.status(500).json({
        message : `${erro.message} - erro na consulta`
      });
    }
  }

  static async atualizarLivro(req, res){
    try{
      const livroId = req.params.id;
      await livro.findByIdAndUpdate(livroId, req.body);
      res.status(200).json({message: "Livro atualizado"});

    } catch (error){
      res.status(500).json({ message: `${error.message} - falha ao atualizar` });
    }
  }

  static async cadastrarLivro(req, res){
    const dadosRequisicao = req.body;
    try{
      const autorLivro = await autor.findById(dadosRequisicao.autor);
      const dadosLivro = { ...dadosRequisicao, autor: { ...autorLivro._doc }};
      const livroCadastrado = await livro.create(dadosLivro);
            
      res.status(201).json({
        message : "Livro cadastrado com sucesso",
        livro : livroCadastrado
      });

    } catch (erro){
      res.status(500).json({
        message : `${erro.message} - falha ao cadastrar livro`});

    }
  }

  static async excluirLivro(req, res){
    try{
      const livroId = req.params.id;
      await livro.findByIdAndDelete(livroId);
      res.status(200).json({ message: "Livro excluido"});

    } catch(erro){
      res.status(500).json({ message : `${erro.message} - falha ao excluir livro`});

    }
  }
};

export default LivroController;