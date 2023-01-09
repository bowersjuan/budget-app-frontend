import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Transaction.css";

const API = process.env.REACT_APP_API_URL;

export default function Transaction({ transaction }) {
  const navigate = useNavigate();
  const { id, amount, itemName, date } = transaction;

  function formatDate(date) {
    let dateObj = new Date(date + "T00:00");
    const dateArray = dateObj.toDateString().split(" ");
    return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
  }

  formatDate(date);

  function handleClick(id) {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => window.location.reload())
      .catch((err) => console.error(err));
  }

  return (
    <tr className="transaction-row">
      <th>{formatDate(date)}</th>
      <th>
        <Link to={`/transactions/${id}`} style={{ textDecorationLine: "none" }}>
          {itemName}
        </Link>
      </th>
      <th style={{ backgroundColor: amount > 0 ? "lime" : "red" }}>{amount}</th>
      <th style={{ border: "none" }}>
        <button
          className="xxsmall-text"
          onClick={() => navigate(`/transactions/${id}/edit`)}>
          Edit
        </button>
      </th>
      <th style={{ border: "none" }}>
        <button className="xxsmall-text" onClick={() => handleClick(id)}>
          Delete
        </button>
      </th>
    </tr>
  );
}
