import express, { Express } from 'express';
import logger from '@dragons/util-logger';
import path from 'path';
import { syncSequelize } from './app/config/sequelize-sync';
import { server } from './app/config/apollo-server';

const app: Express = express();
const port = process.env.port || 3333;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

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
