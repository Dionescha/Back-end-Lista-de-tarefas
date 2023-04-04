import { PrismaClient } from "@prisma/client";
import express from "express";
var cors = require('cors') 

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.use(cors())

const port = 3333;

app.get("/", async (request, response) => {
  const tableTodo = await prisma.todo.findMany();

  console.log("utilizou a rota!!");
  

  response.json(tableTodo);
});

app.post("/", async (request, response) => {
  const { nome } = request.body;

  const createTodo = await prisma.todo.create({
    data: {
      nome,
    },
  });
  console.log("Fez o post");
  response.json(createTodo);
});

app.patch("/:id", async (request, response) => {
  const { id } = request.params;
  const { nome, concluida } = request.body;
  const tarefa = await prisma.todo.update({
    where: { id: Number(id) },
    data: { nome, concluida },
  });
  response.json(tarefa);
});
app.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const tarefa = await prisma.todo.delete({
    where: { id: Number(id) },
  });
  response.json(tarefa);
});

 
app.listen(3333, () => {
  console.log("runnign in port", port);
  
})