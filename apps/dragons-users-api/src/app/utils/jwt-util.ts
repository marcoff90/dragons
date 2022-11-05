import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import { UserI } from '@dragons/api-interfaces';

const generateToken = (user: UserI): string => {
  if (!user.email || !user.password) {
    return null;
  }

  const payload: JwtPayload = (({ id, email }) => ({ id, email }))(user);

  const signInOption: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '2h',
  };

  const privateKey: string = process.env.ACCESS_TOKEN_SECRET;
  return jwt.sign(payload, privateKey, signInOption);
};

export default generateToken;
