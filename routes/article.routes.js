const { Router } = require("express");
const Article = require("../models/Article");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { title, description, urlImage } = req.body;

    const article = new Article({
      title,
      description,
      urlImage,
    });

    await article.save();

    res.json(article);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();

    res.json(articles);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    res.json(article);
  } catch (err) {
    console.log("server", err);
  }
});

router.post("/remove", async (req, res) => {
  try {
    const { articleId } = req.body;
    await Article.findByIdAndDelete(articleId);

    res.json({ message: "Article deleted successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
