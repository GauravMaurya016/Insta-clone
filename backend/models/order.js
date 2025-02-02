const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const Order = mongoose.model("Login", orderSchema);
module.exports = Order;
