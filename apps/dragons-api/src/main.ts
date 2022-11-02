import express, { Express } from 'express';
import { Message } from '@dragons/api-interfaces';
import cors from 'cors';
import logger from '@dragons/util-logger';
import path from 'path';

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  logger.info('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
