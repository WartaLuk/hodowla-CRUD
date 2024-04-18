const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Użyj multer jako middleware w trasie dodawania postów
router.post("/", upload.single("file"), async (req, res) => {
  const post = await Post.create({
    ...req.body,
    imageUrl: req.file.path, // Ścieżka do zapisanego pliku
  });
  res.status(201).json(post);
});

// Pobierz wszystkie posty
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Pobierz pojedynczy post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Dodaj nowy post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Aktualizuj post
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Post.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id: id } });
      res.status(200).json(updatedPost);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Usuń post
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Post deleted");
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
