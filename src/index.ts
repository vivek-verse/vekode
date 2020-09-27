import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import { Router } from './controllers/decorators';
import './controllers/LoginController';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router.getInstance());
app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
