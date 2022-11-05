import { gql } from 'apollo-server-express';

export const querySchema = gql(`
  input allOrders {
    userId: Int!
  }

  input orderById {
    id: Int!
  }

  input LimitOffset {
    limit: Int
    offset: Int
  }

  extend type Query {
    orders(input: allOrders!, limits: LimitOffset): [Order]
    order(input: orderById!): Order
  }
`);
