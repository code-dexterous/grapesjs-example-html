import express from 'express';
import { loadAllAssets } from './assets.controller';

const assetRoute = express.Router();

assetRoute.get('/', loadAllAssets);

export default assetRoute;
