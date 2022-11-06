import sequelize from './sequelize-config';
import OrderModel from '../models/order-model';
import OrderItemModel from '../models/order-item-model';

export const syncSequelize = async () => {
  OrderModel.hasMany(OrderItemModel, {
    as: 'orderItems',
    foreignKey: 'order_id',
  });
  OrderItemModel.belongsTo(OrderModel);
  await sequelize.sync();
};
