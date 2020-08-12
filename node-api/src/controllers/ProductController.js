//lidar com operações que pode ter em models listagem criação remoção etc
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//listagem de todos os produtos que tiver na base de dados
// index todos os reg que tiver de produtos
//prox linha pos await só executa depois de buscar reg banco de dados
module.exports = {
  async index(req, res){
    const products = await Product.find();

    // retorno estrutura de dados json
    return res.json(products);
  },
};

//product posso passar uma verificaçao etc where