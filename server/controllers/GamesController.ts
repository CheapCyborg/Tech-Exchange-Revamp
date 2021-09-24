'use strict';
import { Request, Response } from 'express';

export const getGames = (req: Request, res: Response): void => {
    res.send('This is the tab for showing in stock games');
};
