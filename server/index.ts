'use strict';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import consoleRoutes from './routes/Consoles';
import gameRoutes from './routes/Games';
import accessoriesRoutes from './routes/Accessories';
import homeRoutes from './routes/Home';

const app = express();
dotenv.config();

app.use('/', homeRoutes);
app.use('/consoles', consoleRoutes);
app.use('/games', gameRoutes);
app.use('/accessories', accessoriesRoutes);

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());

const CONNECTION_URL: string = process.env.CONNECTION_URL || ' ';
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
