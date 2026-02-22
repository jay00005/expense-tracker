const Expense = require("./models/Expense");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker")
    .then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => {
    res.send("API running");
});
app.post("/api/expenses", async (req, res) => {
    const expense = new Expense(req.body);
    await expense.save();
    res.json(expense);
});

app.get("/api/expenses", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

app.listen(5000, () => console.log("Server started"));