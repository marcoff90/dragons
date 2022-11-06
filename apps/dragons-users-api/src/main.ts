import express, { Express } from 'express';
import sequelize from './app/config/sequelize-config';
import logger from '@dragons/util-logger';
import { server } from './app/config/apollo-server';

const app: Express = express();
const port = process.env.PORT_USERS || 4002;

(async () => {
  await sequelize.sync();
})();

server.start().then(() => {
  logger.info(`Users Server started`);
  server.applyMiddleware({ app, path: '/graphql' });
});

app.listen(port, () => {
  logger.info(`Users Server listening at http://localhost:${port}/graphql`);
});
