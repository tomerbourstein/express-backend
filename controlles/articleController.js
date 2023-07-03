const asyncHandler = require("express-async-handler");
const articleModel = require("../models/articles");

// Get all articles
const getArticles = asyncHandler(async (req, res) => {
  const articles = articleModel.getArticles();
  res.json(articles);
});

// Get article by id
const getArticleById = asyncHandler(async (req, res) => {
  const parsedId = parseInt(req.query.id);
  const article = articleModel.getArticleById(parsedId);
  if (!article) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json(article);
});

// Get article by title
const getArticleByTitle = asyncHandler(async (req, res) => {
  const article = articleModel.getArticleByTitle(req.query.title);
  if (!article) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json(article);
});

// Post article
const addArticle = asyncHandler(async (req, res) => {
  const newArticle = articleModel.addArticle(req.body);
  res.status(201).json(newArticle);
});

const updateArticle = asyncHandler(async (req, res) => {
  const updatedArticle = articleModel.updateArticle(
    parseInt(req.params.id),
    req.body
  );
  //   console.log(updatedArticle);
  if (!updatedArticle) {
    res.status(404).json({ message: "Article not found." });
  }
  res.json({
    message: `Article id:${req.params.id} successfully updated`,
    updatedArticle,
  });
});

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
