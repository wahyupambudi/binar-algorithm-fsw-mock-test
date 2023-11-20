const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
      data: payload
    })
    let resp = ResponseTemplate(todos, "success", null, 200);
    res.json(resp)
    return
  } catch(error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", null, 500);
    res.json(resp)
    return
  }
}

module.exports = { Insert };
