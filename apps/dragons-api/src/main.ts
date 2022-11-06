import express, { Express } from 'express';
import logger from '@dragons/util-logger';
import path from 'path';
import { syncSequelize } from './app/config/sequelize-sync';
import { server } from './app/config/apollo-server';

const app: Express = express();
const port = process.env.PORT_DRAGON_API || 3333;
/**
 * access to images of dragons, teams, classes -> links stored in db
 */
app.use('/assets', express.static(path.join(__dirname, 'assets')));

(async () => {
  await syncSequelize();
})();

server.start().then(() => {
  logger.info(`Dragons Server started`);
  server.applyMiddleware({ app, path: '/graphql' });
});

app.listen(port, () => {
  logger.info(`Dragons Server listening at http://localhost:${port}/graphql`);
});
