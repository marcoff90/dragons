import { UserI, UserResponseI } from '@dragons/api-interfaces';
import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/user-repository';
import logger from '@dragons/util-logger';
import generateToken from '../utils/jwt-util';
import { validateUserInput } from '../utils/user-validation';

/**
 * After signUp user gets jwt token to continue using the app
 * @param user
 */

const signUp = async (user: UserI): Promise<UserResponseI> => {
  validateUserInput(user);

  try {
    user.password = bcrypt.hashSync(user['password'], 5);
    const savedUser = await UserRepository.storeUser(user);
    logger.info(`Created user ${savedUser.email}, id: ${savedUser.id}`);
    const jwt = generateToken(savedUser);
    return convertUserToUserResponse(savedUser, jwt);
  } catch (e) {
    logger.error(e.message);
    throw new Error(`One of the fields doesn't match requirements`);
  }
};

const signIn = async (user: UserI): Promise<UserResponseI> => {
  const userInDb = await UserRepository.findByEmail(user.email);
  const doesPasswordMatch: boolean =
    userInDb && bcrypt.compareSync(user.password, userInDb.password);

  if (!doesPasswordMatch) {
    logger.info(`Unsuccessful login ${user.email}`);
    throw new Error(`Invalid credentials! Try again!`);
  }

  const jwt = generateToken(userInDb);
  return convertUserToUserResponse(userInDb, jwt);
};

const findById = async (id: number): Promise<UserResponseI> => {
  return await UserRepository.findById(id);
};

const convertUserToUserResponse = ({ id, email }, token): UserResponseI => {
  return { id, email, token };
};

export default {
  signUp,
  signIn,
  findById,
};
