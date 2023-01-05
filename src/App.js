import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BudgetNav from "./Common/BudgetNav";
import Home from "./Pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <BudgetNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
