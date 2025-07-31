import {autor}  from "../models/Autor.js"

class AutorController{

    static async listarAutores(req, res){
        const autores = await autor.find({});
        res.status(200).json(autores);
    }

    static async listarAutorPorId(req, res){
        try{
            const autorId = req.params.id;
            const autorEncontrado = await autor.findById(autorId);
            res.status(200).json(autorEncontrado);

        } catch (erro){
            res.status(500).json({
                message : `${erro.message} - erro ao consultar autor`});
        }
    }

    static async cadastrarAutor(req, res){
        try{
            const autorCadastrado = await autor.create(req.body);
            res.status(201).json({
                message : "Autor cadastrado com sucesso",
                autor: autorCadastrado
            });

        } catch (erro){
            res.status(500).json({
                message : `${erro.message} - erro ao cadastrar autor`});
        }
    }

    static async atualizarAutor(req, res){
        try{
            const autorId = req.params.id;
            await autor.findByIdAndUpdate(autorId, req.body);
            res.status(200).json({
                message : "Autor atualizado"
            });
        } catch (erro){
            res.status(500).json({
                message : `${erro.message} - erro ao atualizar dados do autor`
            });
        }
    }

    static async excluirAutor(req, res){
        try{
            const autorId = req.params.id;
            await autor.findByIdAndDelete(autorId);
            res.status(200).json({
                message : "Autor excluido com sucesso"
            });

        } catch (erro){
            res.status(500).json({
                message: `${erro.message} - erro ao excluir autor`
            });
        }
    }
}

export default AutorController;