// routes/recipe.js
const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
