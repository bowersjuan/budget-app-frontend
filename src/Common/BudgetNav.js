import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/budget-buddy-logo.png";
import "./BudgetNav.css";

const API = process.env.REACT_APP_API_URL;

export default function BudgetNav() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        const amount = response.data
          .map((el) => {
            return el.amount;
          })
          .reduce((acc, el) => {
            return acc + el;
          });

        setBalance(amount);
      })
      .catch((err) => console.error(err));
  }, [balance]);

  return (
    <Navbar className="Navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img id="dollar-sign-logo" width="50em" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            <Nav.Link href="/transactions/new">New</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="amount-container">
          <p>Balance:</p>
          <p id="amount">
            {balance < 0 ? "-" : ""}${balance < 0 ? balance * -1 : balance}
          </p>
        </div>
      </Container>
    </Navbar>
  );
}
