import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class Text extends Component {
  toggleText = () => {
    this.props.toggleText({
      variables: {
        id: this.props.text._id,
      },
    });
  }

  render() {
    const { text } = this.props;
    return (
      <li>
        <input type="checkbox" onChange={this.toggleText} checked={text.completed} />
        <span style={{
          textDecoration: text.completed ? 'line-through' : 'none',
        }}
        >
          {text.name}

        </span>
      </li>
    );
  }
}

const toggleText = gql`
  mutation toggleText($id: String!) {
    toggleText(_id:$id) {
      _id
    }
  }
`;

export default graphql(toggleText, {
  name: 'toggleText',
  options: {
    refetchQueries: ['Resolutions'],
  },
})(Text);
