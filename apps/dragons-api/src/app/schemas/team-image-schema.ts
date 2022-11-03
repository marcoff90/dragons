import { gql } from 'apollo-server-express';

export const teamSchema = gql(`
  type TeamImage {
    id: Int!
    image: String!
  }
    `);
