import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createRegulation = gql`
  mutation createRegulation($name: String!) {
    createRegulation(name: $name) {
      _id
    }
  }
`;

class AddRegulationForm extends Component {
  state = {
    error: null,
  }

  addRegulationForm = () => {
    this.props
      .createRegulation({
        variables: {
          name: this.name.value,
        },
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.error && (
        <p>
          {this.state.error}
        </p>
        )}
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.addRegulationForm}>
          Add regulation
        </button>
      </div>
    );
  }
}

export default graphql(createRegulation, {
  name: 'createRegulation',
  options: {
    refetchQueries: ['Regulations'],
  },
})(AddRegulationForm);
