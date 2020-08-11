const mongoose = require('mongoose');

//na var passo um objeto e nesse obj os campos que quero salvar no banco pra cada produto
const ProductSchema = new mongoose.Schema({
  title:{
    type: String, 
    required: true,

  },
  description:{
    type: String,
    required: true,
  },
  url:{
    type: String,
    required: true,
  },
  created:{
    type: Date,
    default: Date.now,
  },
});

//registra model na aplicação, toda aplicação vai saber que existe um model Product.
//E que possui as propriedades acima
mongoose.model("Product", ProductSchema);
//url link para produto
//created se preenche automaticamente essa coluna vai salvar uma data
//e vai se preencher automaticamente com o valor da data atual que o registro 
//for criado no banco de dados