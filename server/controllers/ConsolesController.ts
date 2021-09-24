"use strict"
import { Request, Response } from "express";

export const getConsoles = (req:Request, res:Response) => {
    res.send("This works!");
};