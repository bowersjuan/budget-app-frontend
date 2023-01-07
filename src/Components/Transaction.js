import { Link } from "react-router-dom";
import "./Transaction.css";

export default function Transaction({ transaction }) {
  const { id, amount, itemName, date } = transaction;

  return (
    <tr>
      <th>{date}</th>
      <th>
        <Link to={`/transactions/${id}`} style={{ textDecorationLine: "none" }}>
          {itemName}
        </Link>
      </th>
      <th style={{ backgroundColor: amount > 0 ? "lime" : "red" }}>{amount}</th>
    </tr>
  );
}
