import React, { Component } from "react";
import { render } from "react-dom";
import Post from "./components/Post"
import Comment from "./components/Comment"
import CreateComment from "./components/CreateComment"

const node = document.getElementById("react-app");

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post.",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  React.createElement(CreateComment)
);

render(App, node);
