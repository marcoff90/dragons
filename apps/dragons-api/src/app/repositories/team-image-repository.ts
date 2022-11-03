import TeamImageModel from '../models/team-image-model';
import { TeamsImageI } from '@dragons/api-interfaces';

const findAll = async (): Promise<TeamsImageI[]> => {
  return await TeamImageModel.findAll();
};

export default {
  findAll,
};
