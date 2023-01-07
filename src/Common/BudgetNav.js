import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/budget-buddy-logo.png";
import logo2 from "../assets/budget-buddy-logo-2.png";
import "./BudgetNav.css";

export default function BudgetNav() {
  return (
    <Navbar className="Navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">
          <img width="50em" src={logo} alt="logo" />
          <img width="50em" src={logo2} alt="logo2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            <Nav.Link href="/transactions/new">New</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
