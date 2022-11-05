import { gql } from 'apollo-server-express';

export const querySchema = gql(`
  input UserId {
    id: Int
  }

  extend type Query {
    user(input: UserId): User
  }
`);
