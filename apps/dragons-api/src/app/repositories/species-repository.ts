import SpeciesModel from '../models/species-model';
import { SpeciesI } from '@dragons/api-interfaces';

const findOneById = async (id: number): Promise<SpeciesI> => {
  return await SpeciesModel.findOne({ where: { id } });
};

const findAll = async (): Promise<SpeciesI[]> => {
  return await SpeciesModel.findAll();
};

export default {
  findOneById,
  findAll,
};
