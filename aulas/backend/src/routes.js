const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => { // requisiçao , resposta

    const body = request.body;    
    console.log(body)
    //return response.send ('Hello World') // envia mensagem ou resposta
    return response.json({ 
        evento: 'Semana Oministack 11.0',
        aluno: 'Vitor Lopes'
    }) //retorna resposta no formato de json
    
});

module.exports = routes;