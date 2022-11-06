import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import logger from '@dragons/util-logger';

const authorize = (req: Request, res: Response, next: NextFunction) => {
  const fullToken = req.headers['authorization'];

  try {
    const token = fullToken.toString().split(' ')[1];
    const decoded: string | JwtPayload = verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.user = decoded;
    logger.info(`User ${decoded['id']} successfully authorized`);
    next();
  } catch (e) {
    if (
      e.message == "Cannot read properties of undefined (reading 'toString')"
    ) {
      logger.info('No token provided');
    } else {
      logger.error(`Access denied! error: ${e.message}`);
    }
    req.user = null;
    next();
  }
};

export default {
  authorize,
};
