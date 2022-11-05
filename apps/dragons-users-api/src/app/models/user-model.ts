import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';
import { UserI } from '@dragons/api-interfaces';

const UserModel = sequelize.define<UserI>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'user',
  }
);

export default UserModel;
