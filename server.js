const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const articlesRoutes = require("./routes/articleRoutes");
const usersRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./swagger/*.js"],
};

const specs = swaggerJsdoc(options);

app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/articles", articlesRoutes);
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
