import { gql } from 'apollo-server-express';

export const querySchema = gql(`
  input orderById {
    id: Int!
  }

  input LimitOffset {
    limit: Int
    offset: Int
  }

  extend type Query {
    orders(limits: LimitOffset): [Order]
    order(input: orderById!): Order
  }
`);
