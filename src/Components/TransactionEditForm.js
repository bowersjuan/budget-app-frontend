import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TransactionEditForm.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionEditForm() {
  const [transaction, setTransaction] = useState({
    id: "",
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });
  const { id } = useParams();
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
      .put(`${API}/transactions/${id}`, transaction)
      .then(() => navigate(`/transactions/${id}`))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <h4>Edit Transaction Form</h4>
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
