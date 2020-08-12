const express = require('express');
const routes = express.Router();

//primeira rota
routes.get('/', (req, res) => {
 /*  Product.create({title: 'React Native',
   description: 'Build native apps with React',
   url:'https://github.com/Arleidt'
  }); */

  res.send("Hello World");
});

module.exports = routes;