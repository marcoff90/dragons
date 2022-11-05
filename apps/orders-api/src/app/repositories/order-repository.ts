import OrderModel from '../models/order-model';
import OrderItemModel from '../models/order-item-model';
import { LimitOffset, OrderI } from '@dragons/api-interfaces';

const createOrder = async ({ userId, totalPrice }): Promise<OrderI> => {
  return await OrderModel.create({ userId, totalPrice });
};

const findAllOrdersByUserId = async (
  userId: number,
  limits: LimitOffset
): Promise<OrderI[]> => {
  return await OrderModel.findAll({
    where: {
      userId,
    },
    limit: limits?.limit,
    offset: limits?.offset,
    order: [
      ['createdAt', 'DESC'],
      ['id', 'DESC'],
    ],
    include: [{ model: OrderItemModel, as: 'orderItems' }],
  });
};

const findById = async (id: number): Promise<OrderI> => {
  return await OrderModel.findOne({
    where: { id },
    include: [{ model: OrderItemModel, as: 'orderItems' }],
  });
};

export default {
  createOrder,
  findAllOrdersByUserId,
  findById,
};
