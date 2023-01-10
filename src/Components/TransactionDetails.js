import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import mario from "../assets/mario.png";
import bowser from "../assets/bowser.png";
import oneUpSound from "../assets/sounds/smb_1-up-copy.wav";
import fireballSound from "../assets/sounds/smb_bowserfire-copy.wav";
import { formatDate } from "../helpers/dateFormatters";
import "./TransactionDetails.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState();
  const { id } = useParams();

  function transactionColorPicker(amount = 0) {
    return amount > 0 ? "lime" : amount < 0 ? "red" : "white";
  }

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((err) => console.error(err));
  }, [id]);

  return transaction ? (
    <div className="transaction-details">
      <section className="empty">
        <audio autoPlay>
          <source
            src={transaction.amount > 0 ? oneUpSound : fireballSound}
            type="audio/wav"
          />
          <track src="" kind="captions" srcLang="en" label="English" />
          Your browser does not support the audio element.
        </audio>
      </section>
      <section
        className="data-section"
        style={{
          backgroundColor: transactionColorPicker(transaction.amount),
        }}>
        <p className="white-bkgrd" style={{ borderBottom: "5px solid black" }}>
          Date
        </p>
        <p>{formatDate(transaction.date)}</p>
      </section>
      <section className="empty"></section>
      <section
        className="data-section"
        style={{
          backgroundColor: transactionColorPicker(transaction.amount),
        }}>
        <p className="white-bkgrd" style={{ borderBottom: "5px solid black" }}>
          Name
        </p>
        <p>{transaction.itemName}</p>
      </section>
      <section
        className="data-section"
        style={{
          backgroundColor: transactionColorPicker(transaction.amount),
        }}>
        <>
          <img
            style={{ padding: "10px" }}
            width="60px"
            src={transaction.amount > 0 ? mario : bowser}
            alt={transaction.amount > 0 ? "mario" : "bowser"}
          />
          <p style={{ fontSize: "medium" }}>{transaction.amount}</p>
        </>
      </section>
      <section
        className="data-section"
        style={{
          backgroundColor: transactionColorPicker(transaction.amount),
        }}>
        <p className="white-bkgrd" style={{ borderBottom: "5px solid black" }}>
          Category
        </p>
        <p>{transaction.category}</p>
      </section>
      <EditButton id={id} />
      <section
        className="data-section"
        style={{
          backgroundColor: transactionColorPicker(transaction.amount),
        }}>
        <p className="white-bkgrd" style={{ borderBottom: "5px solid black" }}>
          From
        </p>
        <p>{transaction.from}</p>
      </section>
      <DeleteButton id={id} />
    </div>
  ) : null;
}
