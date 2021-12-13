const mongoose = require("mongoose");


const Schema = mongoose.Schema

// create a model schema to usres

const ProdutoModel = new Schema({

    nome:{
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    }
    
},{
    timestamps:  true,
});

module.exports = mongoose.model("Produto", ProdutoModel)