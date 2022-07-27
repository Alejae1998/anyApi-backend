const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/', async (req, res) => {
    const data = await Book.getAll();
    res.json(data);
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingData = await Book.getById(id);
    res.json(matchingData);
  });
