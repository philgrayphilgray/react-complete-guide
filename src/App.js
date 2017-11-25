import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Courses from "./containers/Courses/Courses";
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
              <Route path="/" exact component={Instructions} />
              <Route path="/courses" component={Courses} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    );
  }
}

export default App;
