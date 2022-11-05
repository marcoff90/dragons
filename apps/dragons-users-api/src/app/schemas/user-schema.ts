import { gql } from 'apollo-server-express';

export const userSchema = gql(`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

  type User @key(fields: "id") {
    id: Int!
    email: String!
    token: String
    # orders
  }
`);
