import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/budget-buddy-logo.png";
import "./BudgetNav.css";

export default function BudgetNav() {
  return (
    <Navbar className="Navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img width="50em" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            <Nav.Link href="/transactions/new">New</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="amount-container">
          <p>Balance</p>
          <p id="amount">$34,000</p>
        </div>
      </Container>
    </Navbar>
  );
}
