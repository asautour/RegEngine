import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import GoalsSchema from '../../api/goals/Goals.graphql';
import GoalsResolvers from '../../api/goals/resolvers';
import RegulationsSchema from '../../api/resolutions/Regulations.graphql';
import RegulationsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';


// hddss

const typeDefs = [GoalsSchema, RegulationsSchema, UsersSchema];

const resolvers = merge(GoalsResolvers, RegulationsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
