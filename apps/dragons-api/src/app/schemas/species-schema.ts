import { gql } from 'apollo-server-express';

export const speciesSchema = gql(`
  type Species {
    id: Int!
    species: String!
  }
    `);
