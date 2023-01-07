import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./TransactionNewForm.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    id: uuidv4(),
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
      .post(`${API}/transactions/new`, transaction)
      .then(() => navigate("/transactions"))
      .catch((err) => console.error(err));

    setTransaction({
      id: "",
      itemName: "",
      amount: 0,
      date: "",
      from: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>New Transaction Form</h4>
      <div className="inputs-container">
        <label htmlFor="itemName">Item: </label>
        <input
          id="itemName"
          type="text"
          onChange={handleTextChange}
          value={transaction.itemName}
          placeholder="Name..."
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
          placeholder="Source..."
          required
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          onChange={handleTextChange}
          value={transaction.category}
          placeholder="Type..."
          required
        />
      </div>
      <br></br>
      <input id="submitInput" type="submit" />
    </form>
  );
}
