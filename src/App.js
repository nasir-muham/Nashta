import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEvent from "./component/AddEvent/AddEvent"
import MainNavbar from "./component/navbar/MainNavbar";
import Dashboard from "./component/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/addevent"><AddEvent /></Route>
          <Route exact path="/"><MainNavbar /></Route>
          <Route exact path="/dashboard"><Dashboard /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
