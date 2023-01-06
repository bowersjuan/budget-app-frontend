import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Transaction from "./Transaction";
import "./Transactions.css";

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Transactions">
      <h4>Bank Account Total: #</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => {
            return <Transaction key={uuidv4()} transaction={transaction} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
