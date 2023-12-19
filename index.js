import express from 'express';
import dotenv from 'dotenv';
import { SongRouter } from './Routes/song.router.js';
import { InstallRouter } from '../Routes/install.router.js';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;

app.use(SongRouter, InstallRouter);


app.listen(port, () => {
    console.log(`Server kører på port http://localhost:${port}`);
});