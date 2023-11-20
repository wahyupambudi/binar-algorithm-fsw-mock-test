const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

async function Get(req, res) {
  const { id, userId, task, description, start, finish, status } = req.query;

  // get id user from jwt
  const { authorization } = req.headers;
  const users = await jwt.verify(authorization, process.env.SECRET_KEY);
  // console.log(users.id);

  // const payload = {};

  // if (userId) {
  //   payload.userId = parseInt(users.id);
  // }

  // if (task) {
  //   payload.task = task;
  // }

  try {
    const page = parseInt(req.query.page) || 1; // total halaman
    const perPage = parseInt(req.query.perPage) || 10; // total item per halaman
    const skip = (page - 1) * perPage;
    const todos = await prisma.todos.findMany({
      skip,
      take: perPage,
      where: {
        userId: parseInt(users.id)
      } ,
      select: {
        id: true,
        userId: true,
        task: true,
        description: true,
        start: true,
        finish: true,
        status: true,
      },
    });

    let resp = ResponseTemplate(todos, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function Insert(req, res) {
  const { userId, task, description, start, finish, status } = req.body;

  const payload = {
    userId: parseInt(userId),
    task,
    description,
    start,
    finish,
    status,
  };

  try {
    const todos = await prisma.todos.create({
      data: payload,
    });
    let resp = ResponseTemplate(todos, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", null, 500);
    res.json(resp);
    return;
  }
}

module.exports = { Get, Insert };
