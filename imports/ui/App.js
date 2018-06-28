import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import RegulationForm from './RegulationForm';
import GoalForm from './GoalForm';
import Goal from './regulations/Goal';
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
              {regulation.goals.map(goal => (
                <Goal goal={goal} key={goal._id} />
              ))}
            </ul>
            <GoalForm regulationId={regulation._id} />
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
      goals {
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
