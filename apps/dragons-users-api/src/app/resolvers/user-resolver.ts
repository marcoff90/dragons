export const userResolver = {
  Query: {
    user: async (_, { input }, { UserService }) => {
      console.log(input);
      return await UserService.findById(input.id);
    },
  },
  Mutation: {
    signIn: async (_, { input }, { UserService }) => {
      return await UserService.signIn(input);
    },
    signUp: async (_, { input }, { UserService }) => {
      return await UserService.signUp(input);
    },
  },
};
