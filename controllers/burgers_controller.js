const express = require('express');
const burger = require('../models/burgers.js');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    burger.select((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insert([req.body.name], (result) => {
        res.json(result);
        res.status(200).end();
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(id, (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
    })
})

// Export routes for server.js to use.
module.exports = router;