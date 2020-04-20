import 'reflect-metadata'

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/user.routes';

const app = express();
import { createConnection } from "typeorm";

createConnection();
 
// midlewears
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// routes
app.use(userRoutes);


app.listen(3000);

console.log("Server on port 3000");