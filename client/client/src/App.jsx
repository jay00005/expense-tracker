import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await axios.post("http://localhost:5000/api/expenses", {
      title,
      amount,
      type: "expense",
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Expense Tracker</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={addExpense}>Add Expense</button>

      <h2>Expenses</h2>

      {expenses.map((e) => (
        <p key={e._id}>
          {e.title} - ₹{e.amount}
        </p>
      ))}
    </div>
  );
}

export default App;