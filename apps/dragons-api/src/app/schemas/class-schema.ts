import { gql } from 'apollo-server-express';

export const classSchema = gql(`
  type Class {
    id: Int!
    name: String!
    image: String!
  }
    `);
