import express from 'express';
import { editor, home } from './ui.controller';

const uiRoute = express.Router();

uiRoute.get('/', home);
uiRoute.get('/editor/:pageId', editor);
uiRoute.all('*', (req, res) => {
  res.render('404');
});

export default uiRoute;
