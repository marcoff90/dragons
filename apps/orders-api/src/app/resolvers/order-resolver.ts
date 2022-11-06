export const orderResolver = {
  Query: {
    orders: async (_, { limits }, { OrderService, user }) => {
      return await OrderService.findAllOrdersByUserId(user.id, limits);
    },
    order: async (_, { input }, { OrderService, user }) => {
      return await OrderService.findById(input.id, user.id);
    },
  },
  Mutation: {
    createOrder: async (_, { input }, { OrderService, user }) => {
      return await OrderService.createOrder(user.id, input.items);
    },
  },
  Order: {
    user: (order) => {
      return { __typename: 'User', id: order.userId };
    },
  },
};
