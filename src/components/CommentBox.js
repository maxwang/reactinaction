import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CreateComment from "./CreateComment"

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(comment) {
        const comments = this.state.comments;
        comment.id = Date.now();
        const newComments = comments.concat([comment]);
        this.setState({
            comments: newComments
        });
    }

    render() {
        return React.createElement(
            'div',
            {
                className: 'commentBox'
            },
           this.state.comments.map(function(comment) {
                return React.createElement(Comment, {
                    key: comment.id,
                    id: comment.id,
                    content: comment.content,
                    user: comment.user
                });
           }),
           React.createElement(CreateComment, {
               onCommentSubmit: this.handleCommentSubmit
           })
        );
    }
}

export default CommentBox;