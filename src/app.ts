
import express from 'express';
import { ExpressServer } from './server/express.server';

const config = {
  port: 3000,
  Mongo_Uri: 'mongodb://localhost:27017/mydb'
};

const expressInstance = express();
const app = new ExpressServer(expressInstance, config.port);

const db = app.connectDB(config.Mongo_Uri);

//db.connection.on('error', () => console.log('Cannot connect to MongoDB'));

app.httpServer.on('error', () => console.log('Server Error'));
app.httpServer.on('listening', () => console.log('Server Started'));

module.exports.app = app;
