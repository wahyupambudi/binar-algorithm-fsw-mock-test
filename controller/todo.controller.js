const { ResponseTemplate } = require("../helper/template.helper");
const { getUserFromToken } = require("../helper/jwt.helper");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

async function Get(req, res) {
  const { id, userId, task, description, start, finish, status } = req.query;

  // get id user from jwt
  const users = await getUserFromToken(req.headers, process.env.SECRET_KEY);

  // const payload = {};

  // if (userId) {
  //   payload.userId = parseInt(users.id);
  // }

  try {
    const page = parseInt(req.query.page) || 1; // total halaman
    const perPage = parseInt(req.query.perPage) || 10; // total item per halaman
    const skip = (page - 1) * perPage;
    const todos = await prisma.todos.findMany({
      skip,
      take: perPage,
      where: {
        userId: parseInt(users.id),
        task: task,
      },
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

    if (todos[0] === undefined) {
      let respons = ResponseTemplate(
        null,
        "Forbidden: Access denied",
        null,
        400,
      );
      return res.status(400).json(respons);
    }

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

  // get id user from jwt
  const users = await getUserFromToken(req.headers, process.env.SECRET_KEY);

  const payload = {
    userId: parseInt(users.id),
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

async function Update(req, res) {
  const { userId, task, description, start, finish, status } = req.body;
  const { id } = req.params;

  const payload = {};

  if (!userId && !task && !description && !start && !finish && !status) {
    let resp = ResponseTemplate(null, "bad request", null, 400);
    res.json(resp);
    return;
  }
}

module.exports = { Get, Insert };
