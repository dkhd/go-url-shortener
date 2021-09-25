import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Interstitial from "./pages/Interstitial";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-screen min-h-screen">
      <Router>
        <div className="flex flex-row w-screen min-h-screen mx-auto">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            <Route>
              <Interstitial />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
