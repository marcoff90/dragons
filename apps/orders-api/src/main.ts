import express, { Express } from 'express';
import logger from '@dragons/util-logger';
import { server } from './app/config/apollo-server';
import { syncSequelize } from './app/config/sequelize-sync';

const app: Express = express();
const port = process.env.port || 4003;

(async () => {
  await syncSequelize();
})();

server.start().then(() => {
  logger.info(`Apollo Server started`);
  server.applyMiddleware({ app, path: '/graphql' });
});

app.listen(port, () => {
  logger.info(`Apollo Server listening at http://localhost:${port}/graphql`);
});
