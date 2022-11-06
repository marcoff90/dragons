import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from '@apollo/gateway';
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
  buildService({ url }) {
    return new RemoteGraphQLDataSource({
      url,
      willSendRequest({ request, context }) {
        request.http.headers.set(
          'user',
          context.user ? JSON.stringify(context.user) : null
        );
      },
    });
  },
});

export const server = new ApolloServer({
  gateway,
  formatError: (error) => {
    logger.error(error);
    return new Error(error.message);
  },
  context: ({ req }) => {
    const user = req['user'] || null;
    return { user };
  },
});
