import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import OrderService from '../services/order-service';
import { mutationSchema } from '../schemas/mutation-schema';
import { orderSchema } from '../schemas/order-schema';
import { orderResolver } from '../resolvers/order-resolver';
import { orderItemSchema } from '../schemas/order-item-schema';
import { orderItemResolver } from '../resolvers/order-item-resolver';
import { querySchema } from '../schemas/query-schema';
import { applyMiddleware } from 'graphql-middleware';
import { security } from './security';
import logger from '@dragons/util-logger';

export const server = new ApolloServer({
  schema: applyMiddleware(
    buildSubgraphSchema([
      {
        typeDefs: orderItemSchema,
        resolvers: orderItemResolver,
      },
      {
        typeDefs: orderSchema,
        resolvers: orderResolver,
      },
      {
        typeDefs: mutationSchema,
      },
      {
        typeDefs: querySchema,
      },
    ]),
    security
  ),
  formatError: (error) => {
    logger.error(error);
    return new Error(error.message);
  },
  context: ({ req }) => {
    const user = req.headers.user
      ? JSON.parse(req.headers.user as string)
      : null;
    return { OrderService, user };
  },
});
