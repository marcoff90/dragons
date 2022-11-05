import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from 'apollo-server-express';
import { userSchema } from '../schemas/user-schema';
import { mutationSchema } from '../schemas/mutation-schema';
import logger from '@dragons/util-logger';
import UserService from '../services/user-service';
import { userResolver } from '../resolvers/user-resolver';

export const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs: userSchema,
      resolvers: userResolver,
    },
    {
      typeDefs: mutationSchema,
    },
  ]),
  formatError: (error) => {
    logger.error(error);
    return new Error(error.message);
  },
  context: () => ({
    UserService,
  }),
});
