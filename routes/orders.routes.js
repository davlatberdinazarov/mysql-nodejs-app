const express = require('express');
const connection = require('../database/connetion');

const router = express.Router();

// Get all products

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Orders', (err, result) => {
        if (err) throw err;
        res.json({ data: result});
    });
});

module.exports = router;