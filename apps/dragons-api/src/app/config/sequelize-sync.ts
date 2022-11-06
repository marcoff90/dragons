import ClassModel from '../models/class-model';
import DragonModel from '../models/dragon-model';
import SpeciesModel from '../models/species-model';
import sequelize from './sequelize-config';

export const syncSequelize = async () => {
  ClassModel.hasMany(DragonModel, {
    as: 'dragons',
    foreignKey: 'class_id',
  });
  SpeciesModel.hasMany(DragonModel, {
    foreignKey: 'species_id',
  });
  DragonModel.belongsTo(ClassModel);
  DragonModel.belongsTo(SpeciesModel);
  await sequelize.sync();
};
