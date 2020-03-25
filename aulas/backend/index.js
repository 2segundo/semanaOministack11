const express = require ('express');

const app = express();
app.use(express.json());
/**
 * Rota / Recurso
*/
 
/** 
 * Métodos HTTP:
 *  
 * GET: Buscar uma informação do back-end
 * POST: Criar uma info no back-end
 * PUT: Alterar uma info no back-end
 * DELETE: Deletar uma informação no back-end
*/


/** 
 * Tipos de parâmetros: 
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros), paginação)
 * Route Params: Parâmetros utilzados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/


app.post('/users', (request, response) => { // requisiçao , resposta

const body = request.body;    
console.log(body)
//return response.send ('Hello World') // envia mensagem ou resposta
return response.json({ 
    evento: 'Semana Oministack 11.0',
    aluno: 'Vitor Lopes'
}) //retorna resposta no formato de json


});

app.listen(3333);
