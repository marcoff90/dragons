import express, { Express } from 'express';
import logger from '@dragons/util-logger';
import { server } from './app/config/apollo-server';
import AuthMiddleware from '@dragons/auth-middleware';

const app: Express = express();
const port = process.env.PORT_GATEWAY_API || 4000;

app.use(AuthMiddleware.authorize);

server.start().then(() => {
  logger.info(`Apollo Server started`);
  server.applyMiddleware({ app, path: '/graphql' });
});

app.listen(port, () => {
  logger.info(`Apollo Server listening at http://localhost:${port}/graphql`);
});
