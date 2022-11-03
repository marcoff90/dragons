import { gql } from 'apollo-server-express';

export const dragonSchema = gql(`
  type Dragon {
    id: Int!
    name: String!
    heads: Int!
    attack: Float!
    speed: Float!
    armor: Float!
    firepower: Float!
    shotLimit: Float!
    venom: Float!
    jawStrength: Float!
    stealth: Float!
    intro: String!
    about: String!
    summary: String!
    profileImg: String!
    mainImg: String!
    heightImg: String
    class: Class!
    species: Species!
  }

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

  type Count {
    heads: [Int]
  }
`);
