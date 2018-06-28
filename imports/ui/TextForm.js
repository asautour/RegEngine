import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createText = gql`
  mutation createText($name: String!, $regulationId: String!) {
    createText(name: $name, regulationId: $regulationId) {
      _id
    }
  }
`;

class TextForm extends Component {
  submitForm = () => {
    this.props.createText({
      variables: {
        name: this.name.value,
        regulationId: this.props.regulationId,
      },
    }).then(() => {
      this.name.value = '';
    })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>
Submit
        </button>
      </div>
    );
  }
}

export default graphql(createText, {
  name: 'createText',
  options: {
    refetchQueries: ['Regulations'],
  },
})(TextForm);
