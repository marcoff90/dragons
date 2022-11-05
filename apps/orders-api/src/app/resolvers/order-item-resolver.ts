export const orderItemResolver = {
  OrderItem: {
    dragon: (orderItem) => {
      return { __typename: 'Dragon', id: orderItem.dragonId };
    },
  },
};
