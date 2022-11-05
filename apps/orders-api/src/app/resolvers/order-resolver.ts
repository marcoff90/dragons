export const orderResolver = {
  Query: {
    orders: async (_, { input, limits }, { OrderService }) => {
      return await OrderService.findAllOrdersByUserId(input.userId, limits);
    },
    order: async (_, {input}, {OrderService}) => {
      return await OrderService.findById(input.id);
    }
  },
  Mutation: {
    createOrder: async (_, { input }, { OrderService }) => {
      return await OrderService.createOrder(input.userId, input.items);
    },
  },
  Order: {
    user: (order) => {
      return { __typename: 'User', id: order.userId };
    },
  },
};
