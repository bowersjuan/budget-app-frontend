import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Transaction from "./Transaction";

const transactionsData = [
  {
    id: uuidv4(),
    itemName: "monthly tips",
    amount: 1000,
    date: "1/1/23",
    from: "employer",
    category: "income",
  },
  {
    id: uuidv4(),
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
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
