require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes/route");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDef = require("./helper/swagger_template.helper");
const port = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Binar Backend Mock Test",
      version: "1.0.0",
      description: "Implementation Backend For API Todolist",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
          // scheme: 'bearer',
          // bearerFormat: 'JWT',
          description: "Input your Token for Get Access",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://binar-algorithm-fsw-mock-test-production.up.railway.app",
      },
    ],
  },
  apis: [
    "./routes/auth.route.js",
    "./routes/todo.route.js",
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("This My Service REST API todolist!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
