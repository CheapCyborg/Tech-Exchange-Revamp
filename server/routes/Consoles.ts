"use strict"
import express from 'express';

import { getConsoles } from '../controllers/ConsolesController';

const router = express.Router();

router.get('/', getConsoles);

export default router;