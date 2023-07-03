const fs = require("fs");
let articles = [];
let updatedArticleWithId;

// Get a list of articles (GET)
const getArticles = () => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
  });
  return articles;
};

// Get article by id (GET)
const getArticleById = (id) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
  });
  return articles.find((ar) => ar.id === id);
};

// Get article by title (GET)
const getArticleByTitle = (title) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
  });
  return articles.find((ar) => ar.title === title);
};

// Post new article (POST)
const addArticle = (newArticle) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
    newArticle = { id: articles.length + 1, ...newArticle };
    newArticle.id = articles.length + 1;
    articles.push(newArticle);
    console.log(articles);
    fs.writeFile(
      "database.json",
      JSON.stringify({ blog_posts: articles }),
      "utf8",
      (err) => {
        if (err) console.log(err);
        return;
      }
    );
  });

  return newArticle;
};

// Update partially or entirely an existing article (PATCH or PUT)
const updateArticle = (id, updatedArticle) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
    const index = articles.findIndex((ar) => ar.id === id);
    if (index === -1) return null;
    updatedArticleWithId = { id, ...updatedArticle };
    articles[index] = updatedArticleWithId;

    fs.writeFile(
      "database.json",
      JSON.stringify({ blog_posts: articles }),
      "utf8",
      (err) => {
        if (err) console.log(err);
        return;
      }
    );
  });
  return { id, ...updatedArticle };
};

// Delete an entire article (DELETE)
const deleteArticle = (id) => {
  let foundId = id;

  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
    const index = articles.findIndex((ar) => ar.id === id);
    if (index === -1) {
      foundId = null;
      return;
    } else {
      foundId = articles[index].id;
      articles.splice(index, 1);

      fs.writeFile(
        "database.json",
        JSON.stringify({ blog_posts: articles }),
        "utf8",
        (err) => {
          if (err) console.log(err);
          return;
        }
      );
    }
  });
  return foundId;
};

module.exports = {
  getArticles,
  getArticleById,
  getArticleByTitle,
  addArticle,
  updateArticle,
  deleteArticle,
};
