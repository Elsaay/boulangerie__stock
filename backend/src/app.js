const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const productsRoutes = require("./modules/products/products.routes");
app.use("/products", productsRoutes);
POST /products/
GET /products/
PUT /products/:id
DELETE /products/:id

const stockUsageRoutes = require("./modules/stockUsage/stockUsage.routes");
app.use("/stock-usage", stockUsageRoutes);
POST /stock-usage/

const ordersRoutes = require("./modules/orders/orders.routes");
app.use("/orders", ordersRoutes);
POST /orders/
GET /orders/

// test route
app.get('/', (_,res)=>res.send('✅ API running'));

module.exports = app;
