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
    res.json({'message': `${dino.name} added`});
  });
});

router.get('/', (req, res) => {
  Dinosaure.find({}, (err, dinos) => {
    if (err) {
      res.send(err);
    }
    res.json(dinos);
  })
})

module.exports = router;
