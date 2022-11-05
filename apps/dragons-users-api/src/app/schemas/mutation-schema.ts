import { gql } from 'apollo-server-express';

export const mutationSchema = gql(`
  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  extend type Mutation {
    signIn(input: SignInInput!): User
    signUp(input: SignUpInput!): User
  }
`);
