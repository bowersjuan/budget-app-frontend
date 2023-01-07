import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";
import "./Transactions.css";

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [accountTotal, setAccountTotal] = useState(0);

  function calcTotal(transactions) {
    const total = transactions.reduce((acc, { amount }) => {
      return acc + amount;
    }, 0);
    setAccountTotal(total);
  }

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
        calcTotal(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Transactions">
      <h4>Bank Account Total: ${accountTotal}</h4>
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
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
