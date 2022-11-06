import { gql } from 'apollo-server-express';

export const orderItemSchema = gql(`
  type OrderItem {
    dragon: Dragon!
    amount: Int!
  }

  extend type Dragon @key(fields: "id") {
    id: Int! @external
  }
`);
