import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import apartmentRouter from './routers/apartment.router.js'
import userRouter from './routers/user.router.js'
import historyRouter from './routers/history.router.js'

import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin: ['http://localhost:5173'],
    })
);

app.use('/api/apartments', apartmentRouter);
app.use('/api/users', userRouter);
app.use('/api/history',historyRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('litening on port ' + PORT)
});