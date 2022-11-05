import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import OrderService from '../services/order-service';
import { mutationSchema } from '../schemas/mutation-schema';
import { orderSchema } from '../schemas/order-schema';
import { orderResolver } from '../resolvers/order-resolver';
import { orderItemSchema } from '../schemas/order-item-schema';
import { orderItemResolver } from '../resolvers/order-item-resolver';
import { querySchema } from '../schemas/query-schema';

export const server = new ApolloServer({
  schema: buildSubgraphSchema([
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
  formatError: (error) => {
    // logger.error(error);
    return new Error(error.message);
  },
  context: () => ({
    OrderService,
  }),
});
