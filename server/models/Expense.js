const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    type: String
});

module.exports = mongoose.model("Expense", ExpenseSchema);