import { useNavigate } from "react-router-dom";
import "./EditButton.css";

export default function EditButton({ id }) {
  const navigate = useNavigate();

  return (
    <section className="edit-container">
      <button onClick={() => navigate(`/transactions/${id}/edit`)}>Edit</button>
    </section>
  );
}
