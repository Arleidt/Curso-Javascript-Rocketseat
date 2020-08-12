const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapirock', 
  {useNewUrlParser: true}
);
//require('./src/models/Product');
//npm install require-dir faz require em um diretorio em todos os arq automaticamente
requireDir('./src/models');

//const Product = mongoose.model('Product');

/* //primeira rota
app.get('/', (req, res) => {
  Product.create({title: 'React Native',
   description: 'Build native apps with React',
   url:'https://github.com/Arleidt'
  });

  res.send("Hello World");
}); */

//Rotas
app.use('/api', require('./src/routes'));  

app.listen(3002);