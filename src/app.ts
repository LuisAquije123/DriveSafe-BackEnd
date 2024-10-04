import "dotenv/config"
import express from 'express'
import cors from 'cors';
import {router} from './routes/index.route';
import db from './db/connection';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db.authenticate().then(() => console.log("Connection Ready"));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));