'use strict';
import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response): void => {
    res.send('Welcome Home!');
};
