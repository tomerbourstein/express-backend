const asyncHandler = require("express-async-handler");
const articleModel = require("../models/articles");

// Get a list of articles (GET)
const getArticles = asyncHandler(async (req, res) => {
  const articles = articleModel.getArticles();
  res.json(articles);
});

// Get article by id (GET)
const getArticleById = asyncHandler(async (req, res) => {
  const parsedId = parseInt(req.query.id);
  const article = articleModel.getArticleById(parsedId);
  if (!article) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json(article);
});

// Get article by title (GET)
const getArticleByTitle = asyncHandler(async (req, res) => {
  const article = articleModel.getArticleByTitle(req.query.title);
  if (!article) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json(article);
});

// Post new article (POST)
const addArticle = asyncHandler(async (req, res) => {
  const newArticle = articleModel.addArticle(req.body);
  res.status(201).json(newArticle);
});

// Update partially or entirely an existing article (PATCH or PUT)
const updateArticle = asyncHandler(async (req, res) => {
  const updatedArticle = articleModel.updateArticle(
    parseInt(req.params.id),
    req.body
  );
  if (!updatedArticle) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json({
    message: `Article id:${req.params.id} successfully updated`,
    updatedArticle,
  });
});

// Delete an entire article (DELETE)
const deleteArticle = asyncHandler(async (req, res) => {
  const deletedArticleId = articleModel.deleteArticle(parseInt(req.params.id));
  if (!deletedArticleId) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json({ message: `Article id:${deletedArticleId} deleted` });
});

module.exports = {
  getArticles,
  getArticleById,
  getArticleByTitle,
  addArticle,
  updateArticle,
  deleteArticle,
};
