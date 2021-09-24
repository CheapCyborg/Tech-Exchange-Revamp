'use strict';
import express from 'express';

import { getGames } from '../controllers/GamesController';

const router = express.Router();

router.get('/', getGames);

export default router;
