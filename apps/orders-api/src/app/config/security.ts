import { rule, shield } from 'graphql-shield';

const isAuthenticated = rule()((parent, args, { user }) => {
  return user !== null;
});

export const security = shield({
  Query: {
    orders: isAuthenticated,
    order: isAuthenticated,
  },
  Mutation: {
    createOrder: isAuthenticated,
  },
});
