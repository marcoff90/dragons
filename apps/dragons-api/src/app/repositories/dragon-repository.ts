import DragonModel from '../models/dragon-model';
import ClassModel from '../models/class-model';
import SpeciesModel from '../models/species-model';
import { Sequelize } from 'sequelize';
import { DragonI, DragonsInput, LimitOffset } from '@dragons/api-interfaces';

const findDragonsDynamically = async (
  input: DragonsInput,
  limits: LimitOffset
): Promise<DragonI[]> => {
  return await DragonModel.findAll({
    where: input,
    limit: limits?.limit,
    offset: limits?.offset,
    order: [['id', 'ASC']],
  });
};

const findOneByName = async (name: string): Promise<DragonI> => {
  return await DragonModel.findOne({
    where: {
      name,
    },
    include: [ClassModel, SpeciesModel],
  });
};

const getDistinctHeadsProperty = async (): Promise<DragonI[]> => {
  return await DragonModel.findAll({
    attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('heads')), 'heads']],
  });
};

const findById = async (id: number) => {
  return await DragonModel.findOne({
    where: {
      id,
    },
    include: [ClassModel, SpeciesModel],
  });
};

export default {
  findDragonsDynamically,
  findOneByName,
  getDistinctHeadsProperty,
  findById,
};
