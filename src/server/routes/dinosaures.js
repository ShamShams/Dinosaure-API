const express = require('express');
const Dinosaure = require('../model/dinosaure');

const router = express.Router();

// Ajouter un dinosaure :
router.post('/add', (req, res) => {
  let newDinosaure = new Dinosaure(req.body);
  newDinosaure.save((err, dino) => {
    if (err) {
      res.send(err);
    }
    res.redirect('http://localhost:3000');
  });
});

// Afficher tous les dinosaures
router.get('/', (req, res) => {
  Dinosaure.find({}, (err, dinos) => {
    if (err) {
      res.send(err);
    }
    res.json(dinos);
  });
});

// Afficher un dinosaure par id
router.get('/:id', (req, res) => {
  Dinosaure.findById(req.params.id, (err, dino) => {
    if (err) {
      res.send(err);
    }
    res.json(dino);
  });
});

// Modifier un dinosaure
router.post('/:id/update', (req, res) => {
  Dinosaure.findByIdAndUpdate(req.params.id, req.body, (err, dino) => {
    if (err) {
      res.send(err);
    }
    res.redirect('http://localhost:3000');
  });
});

router.get('/:id/remove', (req, res) => {
  Dinosaure.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.send(err);
    }
    res.redirect('http://localhost:3000');
  });
});

module.exports = router;
