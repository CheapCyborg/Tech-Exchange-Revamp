'use strict';
import express from 'express';

import { getAccessories } from '../controllers/AccessoriesController';

const router = express.Router();

router.get('/', getAccessories);

export default router;
