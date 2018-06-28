import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import AddRegulationForm from './AddRegulationForm';
import TextForm from './TextForm';
import Text from './regulations/Text';
import UserForm from './UserForm';

class MainPanelAdmin extends React.Component {
  deleteRegulation = (regulationId) => {
    console.log(`Removing regulation ${  regulationId}`);
  }

  render() {
    const {
      loading, regulations, client, user,
    } = this.props;

    if (loading || !user._id) return null;
    return (

      <div>
        {/* List of all regulations already in the system */}
        <label className="section">
            Regulations
        </label>
        <ul className="regulation-list">
          {regulations.map(regulation => (
            <li key={regulation._id}>
              <span
                style={{
                  textDecoration: regulation.completed ? 'line-through' : 'none',
                }}
                className="regulation-title"
              >
                {regulation.name}
                <button onClick={() => this.deleteRegulation(regulation._id)}>
                  Remove
                </button>

              </span>
              <hr />
              <ul>
                {regulation.texts.map(text => (
                  <Text text={text} key={text._id} />
                ))}
              </ul>
              <TextForm regulationId={regulation._id} />
            </li>
          ))}
        </ul>

        {/* Add regulation section */}
        <AddRegulationForm />


        <UserForm user={user} client={client} />
      </div>
    );
  }
}

const regulationsQuery = gql`
  query Regulations {
    regulations {
      _id
      name
      completed
      texts {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(regulationsQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(MainPanelAdmin));
