const fs = require("fs");
let articles = [];

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
  newArticle.id = articles.length + 1;
  articles.push(newArticle);
  return newArticle;
};

const updateArticle = (id, updatedArticle) => {
  const index = articles.findIndex((ar) => ar.id === id);
  if (index === -1) return null;
  articles[index] = { id, ...updateArticle };
  return articles[index];
};

const deleteArticle = (id) => {
  const index = articles.findIndex((ar) => ar.id === id);
  if (index === -1) return null;
  articles.splice(index, 1);
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
