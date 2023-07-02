let articles = [];

const getArticles = () => {
  return articles;
};

const getArticleById = (id) => {
  return articles.find((ar) => ar.id === id);
};

const getArticleByTitle = (title) => {
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
