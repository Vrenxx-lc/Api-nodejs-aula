//gerando um ola mundo
const express = require('express');
const app = express();

app.get('/', function(req, res){

    res.send("Ola mundo");


})

app.post('/pessoa', function (req, res){
    console.log(req);
    res.json({
        "statusCode":200
    })


});

app.listen(3000, ()=>console.log("Api Rodando."));


