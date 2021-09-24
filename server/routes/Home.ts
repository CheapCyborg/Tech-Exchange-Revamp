'use strict';
import express from 'express';

import { getHome } from '../controllers/HomeController';

const router = express.Router();

router.get('/', getHome);

export default router;
