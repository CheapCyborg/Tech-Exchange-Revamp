'use strict';
import { Request, Response } from 'express';

export const getAccessories = (req: Request, res: Response): void => {
    res.send('This is where Accessories like controllers will');
};
