const express = require("express");
const router = express.Router();
const articleController = require("../controlles/articleController");

router.get("/", articleController.getArticles);
router.get("/title", articleController.getArticleByTitle);
router.get("/id", articleController.getArticleById);
router.post("/", articleController.addArticle);
router.put("/:id", articleController.updateArticle);
router.patch("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
