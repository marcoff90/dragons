import { gql } from 'apollo-server-express';

export const orderSchema = gql(`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable", "@external"])

  type Order @key(fields: "id") {
    id: Int!
    user: User!
    orderItems: [OrderItem!]
    totalPrice: Int!
    createdAt: Float!
  }

  extend type User @key(fields: "id") {
    id: Int! @external
  }
`);
