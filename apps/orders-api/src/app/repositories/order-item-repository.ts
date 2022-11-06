import OrderItemModel from '../models/order-item-model';
import { OrderItemI } from '@dragons/api-interfaces';

const createManyItems = async (
  orderItems: OrderItemI[]
): Promise<OrderItemI[]> => {
  return await OrderItemModel.bulkCreate(orderItems);
};

export default {
  createManyItems,
};
