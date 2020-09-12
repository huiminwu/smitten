import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import logo from './logo.svg';
import Home from './screens/Home';
import LogIn from './screens/Login';
import Profile from "./screens/Profile";
import Contacts from "./screens/Contact";
import "antd/dist/antd.css";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/home/match" exact>
          <Home show={true}/>
        </Route>
        <Route path="/home/contacts" exact>
          <Contacts show={true}/>
        </Route>
        <Route path="/home/profile" exact>
          <Profile show={true}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;