import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TransactionNewForm.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/transactions`, transaction)
      .then(() => navigate("/transactions"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>New Transaction Form</h4>
      <div className="inputs-container">
        <label htmlFor="itemName">Item Name: </label>
        <input
          id="itemName"
          type="text"
          onChange={handleTextChange}
          value={transaction.itemName}
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          onChange={handleNumberChange}
          value={transaction.amount}
          required
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          onChange={handleTextChange}
          value={transaction.date}
          required
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          onChange={handleTextChange}
          value={transaction.from}
          required
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          onChange={handleTextChange}
          value={transaction.category}
          required
        />
      </div>
      <br></br>
      <input id="submitInput" type="submit" />
    </form>
  );
}
