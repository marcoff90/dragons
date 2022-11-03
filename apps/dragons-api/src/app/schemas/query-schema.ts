import { gql } from 'apollo-server-express';

export const querySchema = gql(`
  type Query {
    dragons(input: DragonInput, limits: LimitOffset): [Dragon]
    dragon(input: OneDragon!): Dragon
    distinctHeads: Count
    teams: [TeamImage]
    species: [Species]
    classes: [Class]
  }
`);
