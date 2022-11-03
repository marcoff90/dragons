import sequelize from '../config/sequelize-config';
import { TeamsImageI } from '@dragons/api-interfaces';
import { DataTypes } from 'sequelize';

const TeamImageModel = sequelize.define<TeamsImageI>(
  'team_image',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default TeamImageModel;
