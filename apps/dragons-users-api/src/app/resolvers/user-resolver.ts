export const userResolver = {
  Mutation: {
    signIn: async (_, { input }, { UserService }) => {
      return await UserService.signIn(input);
    },
    signUp: async (_, { input }, { UserService }) => {
      return await UserService.signUp(input);
    },
  },
  User: {
    __resolveReference: async (ref, { UserService }) => {
      return await UserService.findById(ref.id);
    },
  },
};
