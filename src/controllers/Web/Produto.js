const Data_Save_Produto = require("../../models/Produto");

module.exports.indexOne = async (request, response, next) => {

    const {id} = request?.params;


    try{

        const produto = await Data_Save_Produto.find({_id:id})

        response.json({
            message:"Lisda de Produdos!",
            value:produto
        });

    }catch(error){

        return response.status(500).json({
            messagem:'Falha ao listar produtos',
            type: "Internal erro",
            error_detalhe:error,
            valeu:null,
    })
    }
}

module.exports.index = async (request, response, next) => {


    console.log("oooooooooooooooo")
    try{

        const produto = await Data_Save_Produto.find({})

        response.json({
            message:"Lisda de Produdos!",
            value:produto
        });

    }catch(error){

        return response.status(500).json({
            messagem:'Falha ao listar produtos',
            type: "Internal erro",
            error_detalhe:error,
            valeu:null,
    })
    }
}

module.exports.create = async (request, response, next) => {

    const nome = request?.body?.nome;
    const foto = request?.body?.url;
    const descricao = request?.body?.descricao;

    try{

        const data = {
            "nome":nome,
            "foto":foto,
            "descricao": descricao
        }


        if(!nome || !foto || !descricao){

            return response.status(400).json({
                message:"",
                type:"",
                message_error:data,
                data_exmple_new_product:{
                    "nome":"nome. it come in body",
                    "foto":"url publica . it come in body",
                    "descricao": "descricao. it come in body"
                }
            })

        }

        const produto = await Data_Save_Produto.create(data)

        response.json({
            message:"Produto salvo com sucesso!",
            value:produto
        });

    }catch(error){

        return response.status(500).json({
            messagem:'Falha ao cadastrar produto',
            type: "Internal erro",
            error_detalhe:error,
            valeu:null,
    })
    }
}

module.exports.update = async (request, response, next) => {

    const {id} = request?.params;
    const nome = request?.body?.nome;
    const foto = request?.body?.url;
    const descricao = request?.body?.descricao;

    try{

        const data = {
            "nome":nome,
            "foto":foto,
            "descricao": descricao
        }



        if(!nome || !foto || !descricao || !id){

            return response.status(400).json({
                message:"Falha ao registrar produto",
                type:"",
                message_error:data,
                data_exmple_new_product:{
                    "nome":"nome. it come in body",
                    "foto":"url publica . it come in body",
                    "descricao": "descricao. it come in body",
                    "id": "id. it come in params"
                }
            })

        }

        await Data_Save_Produto.findByIdAndUpdate(
            {_id:id},
            { $set:data},
            { useFindAndModify: false }
        );

        const produto = await Data_Save_Produto.findById(id)

        response.json({
            message:"Produto atualizado com sucesso!",
            value:produto
        });

    }catch(error){

        return response.status(500).json({
            messagem:'Falha ao atualizar produto',
            type: "Internal error",
            error_detalhe:error,
            valeu:null,
    })
    }
}

module.exports.delete = async (request, response, next) => {

    const id = request?.params?.id;


    try{

        const produto = await Data_Save_Produto.findByIdAndDelete(id)

        response.json({
            message:"Produto apagado com sucesso!",
            value:produto
        });

    }catch(error){

        return response.status(500).json({
            messagem:'Falha ao apagar produto',
            type: "Internal erro",
            error_detalhe:error,
            valeu:null,
    })
    }
}