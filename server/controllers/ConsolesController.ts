'use strict';
import { Request, Response } from 'express';

export const getConsoles = (req: Request, res: Response): void => {
    res.send('This works!');
};
