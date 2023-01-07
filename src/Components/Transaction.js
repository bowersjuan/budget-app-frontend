import { Link } from "react-router-dom";

export default function Transaction({ transaction }) {
  return (
    <tr>
      <th>{transaction.date}</th>
      <th>
        <Link to={`/transactions/${transaction.id}`}>
          {transaction.itemName}
        </Link>
      </th>
      <th>{transaction.amount}</th>
    </tr>
  );
}
