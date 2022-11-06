import express, { Express } from 'express';
import logger from '@dragons/util-logger';
import { server } from './app/config/apollo-server';
import { syncSequelize } from './app/config/sequelize-sync';

const app: Express = express();
const port = process.env.PORT_ORDERS || 4003;

(async () => {
  await syncSequelize();
})();

server.start().then(() => {
  logger.info(`Order Server started`);
  server.applyMiddleware({ app, path: '/graphql' });
});

app.listen(port, () => {
  logger.info(`Order Server listening at http://localhost:${port}/graphql`);
});
