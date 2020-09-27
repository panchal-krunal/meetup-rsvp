import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import AddUser from "./screens/add-user";
import ListUser from "./screens/list-user";
import Report from "./screens/report";

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect  to="adduser" />
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
