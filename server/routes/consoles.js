"use strict"
import express from 'express';

import { getConsoles } from '../controllers/consoles.js';

const router = express.Router();

router.get('/', getConsoles);

export default router;