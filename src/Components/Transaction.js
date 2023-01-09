import { Link } from "react-router-dom";
import "./Transaction.css";

export default function Transaction({ transaction }) {
  const { id, amount, itemName, date } = transaction;

  return (
    <tr className="transaction-row">
      <th>{date}</th>
      <th>
        <Link to={`/transactions/${id}`} style={{ textDecorationLine: "none" }}>
          {itemName}
        </Link>
      </th>
      <th style={{ backgroundColor: amount > 0 ? "lime" : "red" }}>{amount}</th>
      {/* <th style={{ border: "none" }}></th> */}
      <th style={{ border: "none" }}>
        <button className="xxsmall-text">Edit</button>
      </th>
      <th style={{ border: "none" }}>
        <button className="xxsmall-text">Delete</button>
      </th>
    </tr>
  );
}
