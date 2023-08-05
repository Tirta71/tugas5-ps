import LCGTable from "./components/LgcCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/myNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import RngCalculator from "./components/RngCalculator";
import LcgCalculator from "./components/LcgCalculator";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<LCGTable />} />
        <Route path="/rng" element={<RngCalculator />} />
        <Route path="/lcg" element={<LcgCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
