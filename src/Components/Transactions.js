import { useState, useEffect } from "react";
import Transaction from "./Transaction";

const transactionsData = [
  {
    itemName: "monthly tips",
    amount: 1000,
    date: "1/1/23",
    from: "employer",
    category: "income",
  },
  {
    itemName: "food",
    amount: -200,
    date: "1/8/23",
    from: "supermarket",
    category: "personal expenses",
  },
];

export default function Transactions() {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  return (
    <div className="Transactions">
      <h3>Bank Account Total: #</h3>
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
            return <Transaction transaction={transaction} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
