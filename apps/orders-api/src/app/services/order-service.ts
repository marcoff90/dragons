import { LimitOffset, OrderI, OrderItemI } from '@dragons/api-interfaces';
import OrderRepository from '../repositories/order-repository';
import OrderItemRepository from '../repositories/order-item-repository';

const createOrder = async (
  userId: number,
  orderItems: OrderItemI[]
): Promise<OrderI> => {
  const totalPrice = orderItems
    .map((item) => item.amount * item.itemPrice)
    .reduce((a, b) => a + b, 0);

  const order = await OrderRepository.createOrder({ userId, totalPrice });
  orderItems.forEach((item) => (item.orderId = order.id));

  await OrderItemRepository.createManyItems(orderItems);
  return await OrderRepository.findById(order.id);
};

const findAllOrdersByUserId = async (
  userId: number,
  limits: LimitOffset
): Promise<OrderI[]> => {
  return await OrderRepository.findAllOrdersByUserId(userId, limits);
};

const findById = async (id: number): Promise<OrderI> => {
  return await OrderRepository.findById(id);
};

export default {
  createOrder,
  findAllOrdersByUserId,
  findById
};
