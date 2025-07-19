import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
function App() {
  return (
    <Router>
      <nav className="navbar">
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/404" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
