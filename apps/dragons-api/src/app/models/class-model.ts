import sequelize from '../config/sequelize-config';
import { ClassI } from '@dragons/api-interfaces';
import { DataTypes } from 'sequelize';

const ClassModel = sequelize.define<ClassI>(
  'class',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default ClassModel;
