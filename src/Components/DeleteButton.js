import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DeleteButton.css";

const API = process.env.REACT_APP_API_URL;

export default function DeleteButton({ id }) {
  const navigate = useNavigate();

  function handleClick(id) {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => navigate("/transactions"))
      .catch((err) => console.error(err));
  }

  return (
    <section className="delete-container">
      <button onClick={() => handleClick(id)}>Delete</button>
    </section>
  );
}
