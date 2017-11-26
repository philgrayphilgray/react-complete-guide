import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Course from "./containers/Course/Course";
import Users from "./containers/Users/Users";
import Instructions from "./components/Instructions/Instructions";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <header>
        <BrowserRouter>
          <div className="App">
            <Navigation />
            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/users" component={Users} />
              <Redirect from="/all-courses" to="/courses" />
              <Route path="/" exact component={Instructions} />
              <Route path="/" render={() => <h2>404</h2>} />
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    );
  }
}

export default App;
