import ClassModel from '../models/class-model';
import { ClassI } from '@dragons/api-interfaces';

const findAll = async (): Promise<ClassI[]> => {
  return await ClassModel.findAll();
};

const findOneById = async (id: number): Promise<ClassI> => {
  return await ClassModel.findOne({
    where: {
      id,
    },
  });
};

export default {
  findAll,
  findOneById,
};
