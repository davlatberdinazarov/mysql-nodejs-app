require("dotenv").config();

const express = require("express");
const cors = require("cors");
const UsersRoutes = require('./routes/users.routes');
const OrdersRoutes = require('./routes/orders.routes');
const ProductRoutes = require("./routes/product.routes")

const app = express();

// Middleware 
app.use(express.json());
app.use(cors());
// Routes

app.use("/api/users", UsersRoutes);
app.use("/api/orders", OrdersRoutes);
app.use("/api/products", ProductRoutes);


let PORT = process.env.PORT || 3000;

// Listen on port

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
