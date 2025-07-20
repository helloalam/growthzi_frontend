import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <nav className="navbar">
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/404" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
