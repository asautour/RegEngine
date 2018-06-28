import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import RegulationForm from './RegulationForm';
import TextForm from './TextForm';
import Text from './regulations/Text';
import UserForm from './UserForm';

const App = ({
  loading, regulations, client, user,
}) => {
  if (loading) return null;
  return (
    <div>
      <UserForm user={user} client={client} />
      {user._id
      && <RegulationForm />
      }
      {user._id
      && (
      <ul>
        {regulations.map(regulation => (
          <li key={regulation._id}>
            <span style={{
              textDecoration: regulation.completed ? 'line-through' : 'none',
            }}
            >
              {regulation.name}
            </span>
            <ul>
              {regulation.texts.map(text => (
                <Text text={text} key={text._id} />
              ))}
            </ul>
            <TextForm regulationId={regulation._id} />
          </li>
        ))}
      </ul>
      )
      }
    </div>
  );
};

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
})(withApollo(App));
