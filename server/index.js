"use strict"
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import consoleRoutes from './routes/consoles.js';

const app = express();

app.use('/consoles', consoleRoutes);

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());

const CONNECTION_URL = "mongodb+srv://cheapcyborg:1234567q@cluster0.1ddfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));