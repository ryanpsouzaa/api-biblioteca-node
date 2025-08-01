import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id : { type: mongoose.Schema.Types.ObjectId },
  titulo : { type: String, required: [true, "Campo Titulo é obrigatório"] },
  editora : { type: String, required: [true, "Campo Editora é obrigatório"] },
  preco : { type: Number },
  paginas : { type: Number, required: [true, "Quantidade de Páginas é obrigatório"]},
  autor : { type: mongoose.Types.ObjectId, ref: "autores", required: [true, "Autor(a) deve ser fornecido"]} 

}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;