import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post", //maakt nu vast aan base url (absolute path). met {this.props.match.url + '/new-post'} komt het achter de url waar je op dat moment bent(relative path).
                    hash: "#submit",
                    search: "?quick-submin=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home</h1>} /> */}

        <Switch>
          <Route path="/posts" component={Posts} />
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          {/* <Route render={() => <h1>Page not found</h1>} /> */}
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={NewPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
