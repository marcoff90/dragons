import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-express';
import logger from '@dragons/util-logger';

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'dragons', url: 'http://localhost:3333/graphql' },
      { name: 'users', url: 'http://localhost:4002/graphql' },
      { name: 'orders', url: 'http://localhost:4003/graphql' },
    ],
  }),
});

export const server = new ApolloServer({
  gateway,
  formatError: (error) => {
    logger.error(error);
    return new Error(error.message);
  },
});
