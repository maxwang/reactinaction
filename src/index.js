import React, { Component } from "react";
import { render } from "react-dom";
import Post from "./components/Post"
import CommentBox from "./components/CommentBox"

const node = document.getElementById("react-app");

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post.",
    user: "mark"
  },
  React.createElement(CommentBox, {
    comments: [
      {
        id: 0,
        user: "David",
        content: "such. win."
      },
      {
        id: 1,
        user: "Haley",
        content: "Love it."
      },
      {
        id: 2,
        user: "Peter",
        content: "Who was Samuel Johnson?"
      },
      {
        id: 3,
        user: "Mitchell",
        content: "@Peter get off Letters and do your homework"
      },
      {
        id: 4,
        user: "Peter",
        content: "@mitchell ok :P"
      }
    ]
  })
);

render(App, node);
