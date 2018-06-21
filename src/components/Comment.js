import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Comment extends Component {
    render() {
      //console.log("yo");
      return(
        <div className="comment">
          <h2 className="commentAuthor">{this.props.user}&nbsp;
            <span className="commentContent">{this.props.content}</span>
          </h2>
        </div>
      );
    }
  }
  
  Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  };

  export default Comment;