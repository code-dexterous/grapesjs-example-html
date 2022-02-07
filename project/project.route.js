import express from 'express';
import { create, findAll } from './project.controller';

const projectRoute = express.Router();
projectRoute.post('/', create);
projectRoute.get('/', findAll);
export default projectRoute;
