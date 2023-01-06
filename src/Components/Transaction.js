export default function Transaction({ transaction }) {
  return (
    <tr>
      <th>{transaction.date}</th>
      <th>{transaction.itemName}</th>
      <th>{transaction.amount}</th>
    </tr>
  );
}
