import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
