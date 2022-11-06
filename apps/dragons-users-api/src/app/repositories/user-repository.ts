import UserModel from '../models/user-model';
import { UserI } from '@dragons/api-interfaces';

const storeUser = async (user: UserI) => {
  return await UserModel.create(user);
};

const findByEmail = async (email: string) => {
  return await UserModel.findOne({
    where: {
      email,
    },
  });
};

const findById = async (id: number) => {
  return await UserModel.findOne({
    where: {
      id,
    },
  });
};

export default {
  storeUser,
  findByEmail,
  findById,
};
