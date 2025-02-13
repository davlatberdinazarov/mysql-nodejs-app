const express = require('express');
const connection = require('../database/connetion');
const router = express.Router();

// Get all users
router.get("/", (req, res) => {
    connection.query("SELECT * FROM Users", (err, rows, fields) => {
        if (err) throw err;
        res.json({data: rows});
    });
})

router.get("/:id", (req, res) => {
    let userId = req.params.id;
    connection.query("SELECT * FROM Users WHERE id = ?", [userId], (err, rows) => {
        if (err) throw err;
        res.json({data: rows});
    })
})

// Create new user
router.post("/create", (req, res) => {
    const { name, email } = req.body;
    connection.query("INSERT INTO Users (name, email) VALUES (?, ?)", [name, email], (err, rows) => {
        if (err) throw err;
        res.json({message: "User created successfully!", user: rows});
    })
})

// Update user
router.put("/update/:id", (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    connection.query("UPDATE Users SET name = ?, email = ? WHERE id = ?", [name, email, userId], (err, rows) => {
        if (err) throw err;
        res.json({message: "User updated successfully!", user: rows});
    })
})

// Delete user
router.delete("/delete/:id", (req, res) => {
    const userId = req.params.id;
    connection.query("DELETE FROM Users WHERE id = ?", [userId], (err, rows) => {
        if (err) throw err;
        res.json({message: "User deleted successfully!", user: rows});
    })
})

module.exports = router;
