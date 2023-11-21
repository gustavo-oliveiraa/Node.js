const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) =>{
    res.send('Hello World, Sejam todos bem vindos ao primeiro Servidor Express!');
})

app.listen(port, () =>{
    console.log('Servidor iniciado com Sucesso!')
})
