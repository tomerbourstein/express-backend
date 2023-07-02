const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./server.js"],
};
const specs = swaggerJsdoc(options);

app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  if (res.statusCode != 200) res.status(404).json({ error: "Post not found" });
  res.json({ success: true, message: "Hello from server" });
});

// Read the existing data from the database.json file
function readDatabase(callback) {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    let jsonDatabase;
    try {
      jsonDatabase = JSON.parse(data);
    } catch (parseError) {
      console.error(parseError);
      return callback(parseError);
    }
    callback(null, jsonDatabase);
  });
}

// Write the updated data back to the database.json file
function writeDatabase(data, callback) {
  fs.writeFile("database.json", JSON.stringify(data), "utf8", (err) => {
    if (err) {
      console.error(err);
      return callback(err);
    }

    callback(null);
  });
}

app.get("/articles", (req, res) => {
  readDatabase((err, jsonData) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const blogPosts = jsonData.blog_posts;
    res.status(201).json(blogPosts);
  });
});

app.post("/articles", (req, res) => {
  const { author_uid, title, content } = req.body;
  readDatabase((err, jsonData) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const maxValueId = jsonData.blog_posts.reduce(
      (max, post) => Math.max(max, post.id),
      -1
    );

    const newArticle = {
      id: maxValueId + 1,
      author_uid,
      title,
      content,
    };

    jsonData.blog_posts.push(newArticle);

    writeDatabase(jsonData, (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.status(201).json(newArticle);
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
