//gerando um ola mundo
const express = require('express');
const app = express();

app.get('/teste', function(req, res){

    res.send("Ola mundo");


})

app.listen(3000, ()=>console.log("Api Rodando."));


