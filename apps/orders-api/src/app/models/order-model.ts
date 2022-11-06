import sequelize from '../config/sequelize-config';
import { OrderI } from '@dragons/api-interfaces';
import { DataTypes } from 'sequelize';

const OrderModel = sequelize.define<OrderI>(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'total_price',
    },
    createdAt: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: Math.floor(Date.now() / 1000),
      field: 'created_at',
    },
  },
  {
    timestamps: false,
    tableName: 'order',
  }
);

export default OrderModel;
