import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

/*
 * GET: Buscar ou listar uma informação
 * POST: Criar uma nova informação no Backend
 * PUT: Atualizar uma informação existente
 * DELETE: Deletar uma informação existente
 *
 * Corpo (Request Body): Dados para criação ao atualização de um registro
 * request.body
 * Routes Params: Identificar qual recurso eu queroi atualizar ou deletar
 * Query Params: Paginação, filtros, ordenação.
 */

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);
