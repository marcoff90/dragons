import { OrderItemI } from '@dragons/api-interfaces';
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';

const OrderItemModel = sequelize.define<OrderItemI>(
  'order_item',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id',
    },
    dragonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'dragon_id',
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'order_item',
    indexes: [
      {
        unique: true,
        fields: ['order_id', 'dragon_id'],
      },
    ],
  }
);

export default OrderItemModel;
