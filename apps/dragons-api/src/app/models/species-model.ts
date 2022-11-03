import sequelize from '../config/sequelize-config';
import { SpeciesI } from '@dragons/api-interfaces';
import { DataTypes } from 'sequelize';

const SpeciesModel = sequelize.define<SpeciesI>(
  'species',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);

export default SpeciesModel;
