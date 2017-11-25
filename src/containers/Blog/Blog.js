import React, { Component } from "react";
// import axios from "axios";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog extends Component {
  state = {
    auth: false
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/** Guard: must be authenticated to navigate to new-post **/}
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/**<Redirect from="/" to="/posts/" />**/}
          {/**<Route path="/" component={Posts} />**/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
