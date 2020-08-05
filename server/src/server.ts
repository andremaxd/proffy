import express from "express";

const app = express();

app.use(express.json());

//GET: usado para listar ou buscar uma informação
//POST: criar alguma nova informação dentro do backend
// PUT: atualizar uma informação existente
// DELETE: Deletar uma informação existente

// corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params:identificar um recurso que ira atualizar ou deletar
//ex: app.delete('/users/:id')
// Query Params: listagem, paginação, filtros, ordenação

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

//localhost:3333

app.listen(3333);
