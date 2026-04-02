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

const stockUsageRoutes = require("./modules/stockUsage/stockUsage.routes");
app.use("/stock-usage", stockUsageRoutes);

const ordersRoutes = require("./modules/orders/orders.routes");
app.use("/orders", ordersRoutes);

// test route
app.get('/', (_,res)=>res.send('✅ API running'));

module.exports = app;
