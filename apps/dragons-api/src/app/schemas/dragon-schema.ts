import { gql } from 'apollo-server-express';

export const dragonSchema = gql(`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

  type Dragon @key(fields: "id") {
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
    price: Float!
    class: Class!
    species: Species!
  }

  type Count {
    heads: [Int]
  }
`);
