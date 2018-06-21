import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { format } from "util";


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            user: ''
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        const val = event.target.value;
        this.setState(() => ({
            user:val
        }));
    }

    handleTextChange(event) {
        const val = event.target.value;
        this.setState(() => ({
            content:val
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCommentSubmit({
            user: this.state.user.trim(),
            content: this.state.content.trim()
        });
        this.setState(() => ({
            user: '',
            content: ''
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="createComment">
                <input 
                    value={this.state.user}
                    onChange={this.handleUserChange}
                    placeholder="Your name"
                    type="text"
                 />
                 <input
                    value={this.state.context}
                    onChange={this.handleTextChange}
                    placeholder="Thoughts?"
                    type="text"
                  />
                  <button type="submit">Post</button>
            </form>
        );
    }
}

CreateComment.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    content: PropTypes.string
};

export default CreateComment;