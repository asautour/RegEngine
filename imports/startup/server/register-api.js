import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import TextsSchema from '../../api/texts/Texts.graphql';
import TextsResolvers from '../../api/texts/resolvers';
import RegulationsSchema from '../../api/resolutions/Regulations.graphql';
import RegulationsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';


// hddcs

const typeDefs = [TextsSchema, RegulationsSchema, UsersSchema];

const resolvers = merge(TextsResolvers, RegulationsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
