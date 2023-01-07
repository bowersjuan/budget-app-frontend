import "./EditButton.css";

export default function EditButton() {
  function handleClick() {
    console.log("Edit this transaction");
  }

  return (
    <section className="edit-container">
      <button onClick={() => handleClick()}>Edit</button>
    </section>
  );
}
