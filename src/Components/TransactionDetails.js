import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import mario from "../mario.png";
import bowser from "../bowser.png";
import "./TransactionDetails.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((err) => console.error(err));
  }, [transaction, id]);

  return (
    <div className="transaction-details">
      <section className="empty"></section>
      <section>
        <p className="small-text">date: {transaction?.date}</p>
      </section>
      <section className="empty"></section>
      <section>
        <p className="small-text">name: {transaction?.itemName}</p>
      </section>
      <section>
        {transaction ? (
          <>
            <img
              style={{ padding: "10px" }}
              width="60px"
              src={transaction.amount > 0 ? mario : bowser}
              alt={transaction.amount > 0 ? "mario" : "bowser"}
            />
            <p>{transaction.amount}</p>
          </>
        ) : (
          ""
        )}
      </section>
      <section>
        <p className="small-text">category: {transaction?.category}</p>
      </section>
      <section className="empty"></section>
      <section>
        <p className="small-text">from: {transaction?.from}</p>
      </section>
      <section className="empty"></section>
    </div>
  );
}
