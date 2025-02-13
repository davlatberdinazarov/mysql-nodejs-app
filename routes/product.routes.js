const express = require("express");
const connection = require("../database/connetion");

const router = express.Router();

// GET ALL PRODUCTS

router.get("/", (req, res) => {
  connection.query("SELECT * FROM products", (err, field) => {
    if (err) throw err;
    res.json({ data: field });
  });
});

// GET PRODUCT BY ID

router.get("/:id", (req, res) => {
  let productId = req.params.id;
  connection.query(
    "SELECT * FROM products WHERE id =?",
    [productId],
    (err, field) => {
      if (err) throw err;
      res.json({ data: field });
    }
  );
});

// ADD NEW PRODUCT
router.post("/create", (req, res) => {
  let { product_name, price, category, image, description } = req.body;
  connection.query(
    "INSERT INTO products (product_name, price, category, image, description) VALUES (?, ?, ?, ?, ?)",
    [product_name, price, category, image, description],
    (err, field) => {
      if (err) throw err;
      res.json({ message: "Product added successfully!", product: field });
    }
  );
});

// UPDATE PRODUCT

router.put("/update/:id", (req, res) => {
  let { product_name, price, category, image, description } = req.body;
  let productId = req.params.id;
  connection.query(
    "UPDATE products SET product_name =?, price =?, category =?, image =?, description =? WHERE id =?",
    [product_name, price, category, image, description, productId],
    (err, field) => {
      if (err) throw err;
      res.json({ message: "Product updated successfully!", product: field });
    }
  );
});

// DELETE PRODUCT

router.delete("/delete/:id", (req, res) => {
  let productId = req.params.id;
  connection.query("DELETE FROM products WHERE id =?", [productId], (err, field) => {
    if (err) throw err;
    res.json({ message: "Product deleted successfully!" });
  });
});

module.exports = router;
