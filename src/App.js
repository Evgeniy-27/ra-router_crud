import React from "react";
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import "./App.css";

import PostProvider from "./component/PostProvider.js";
import NewPost from "./component/NewPost.js";
import ChangePost from "./component/ChangePost.js";
import ItemPost from "./component/ItemPost.js";
import Posts from "./component/Posts.js";
import Page404 from './component/Page404.js';


export default function App() {
  
  return (
    <PostProvider url={`${process.env.REACT_APP_POSTS_URL}/`}>
      <Router>
        
        <div>
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/change/:id" component={ChangePost} />
            <Route path="/posts/:id" component={ItemPost} />
            <Route path="/" exact component={Posts} />
            <Route path='*' component={Page404}/>
          </Switch>
        </div>
      </Router>
    </PostProvider>
  );
}
