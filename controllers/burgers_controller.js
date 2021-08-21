const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

// Get Route
router.get('/', (req, res) => {
    burger.select(data => {
      const hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
// Post Route
router.post('/api/burgers', (req, res) => {
    burger.insert(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      (result) => {
        res.json({ id: result.insertId });
      }
    );
  });
// Put Route
router.put('/api/burgers/:id', (req, res) => {
    let condition = "id = " + req.params.id;
    
    burger.update(
      { devoured: req.body.devoured },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });

// Export routes for server.js to use.
module.exports = router;