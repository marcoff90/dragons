import { gql } from 'apollo-server-express';

export const querySchema = gql(`
  input DragonInput {
    heads: Int
    classId: Int
    speciesId: Int
  }

  input LimitOffset {
    limit: Int
    offset: Int
  }

  input OneDragon {
    name: String!
  }

  extend type Query {
    dragons(input: DragonInput, limits: LimitOffset): [Dragon]
    dragon(input: OneDragon!): Dragon
    distinctHeads: Count
    teams: [TeamImage]
    species: [Species]
    classes: [Class]
  }
`);
