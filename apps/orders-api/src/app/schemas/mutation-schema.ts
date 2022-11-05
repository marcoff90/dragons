import { gql } from 'apollo-server-express';

export const mutationSchema = gql(`
  input CreateOrderInput {
    userId: Int!
    items: [OrderItemInput!]
  }

  input OrderItemInput {
    dragonId: Int!
    amount: Int!
    itemPrice: Int!
  }

  extend type Mutation {
    createOrder(input: CreateOrderInput!): Order!
  }
`);
