import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}
