import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

export default class Markdown extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };

    fetchMarkdownContent();
  }

  fetchMarkdownContent() {
    const { source } = this.props;

    if (!source) {
      console.log("Markdown component must have a source prop");
    }

    // fetch markdown content from source (path)
    fetch(source)
      .then(response => response.text())
      .then(text => this.setState({ text }));
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.state.text} />
      </div>
    );
  }
}

Markdown.propTypes = {
  source: PropTypes.string
};
