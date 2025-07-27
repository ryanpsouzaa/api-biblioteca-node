import mongoose, { mongo } from "mongoose"

async function conectarDataBase(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.mzdyjll.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    
    return mongoose.connection;

};

export default conectarDataBase;



