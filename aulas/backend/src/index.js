const express = require ('express');
const routes = require('./routes');

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

/**
*SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server 
*NOSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 * 
 *
*/


app.use(routes);

app.listen(3333);
