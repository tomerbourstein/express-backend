const fs = require("fs");
let articles = [];
let updatedArticleWithId;

// Read the existing data from the database.json file
// function readDatabase(callback) {
//   fs.readFile("database.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return callback(err);
//     }
//     let jsonData;
//     try {
//       jsonData = JSON.parse(data);
//     } catch (parseError) {
//       console.error(parseError);
//       return callback(parseError);
//     }
//     callback(null, jsonData);
//   });
// }

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

// Get a list of articles
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

// Get article by id
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

// Get article by title
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

const deleteArticle = (id) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    articles = parsedData.blog_posts;
    const index = articles.findIndex((ar) => ar.id === id);
    if (index === -1) return null;
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
  });

  return id;
};

module.exports = {
  getArticles,
  getArticleById,
  getArticleByTitle,
  addArticle,
  updateArticle,
  deleteArticle,
};
