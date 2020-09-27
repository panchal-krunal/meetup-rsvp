import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import AddUser from "./screens/add-user";
import ListUser from "./screens/list-user";
import Report from "./screens/report";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/report">Report</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="adduser" />
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route exact path="/users">
            <ListUser />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
