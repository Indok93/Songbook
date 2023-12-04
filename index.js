import express from 'express';
import dotenv from 'dotenv';
import { router as HomeRouter} from './Routes/home.router.js';
import { router as ArtistRouter} from './Routes/artist.router.js';
import { router as ListRouter} from './Routes/list.router.js';
import { router as SongRouter} from './Routes/song.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;
const api_key = process.env.APIKEY;

app.use(HomeRouter);
app.use(ArtistRouter);
app.use(ListRouter);
app.use(SongRouter);
// Udvider app i index.js så vi kan læse form body data
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server kører på port ${port}`);
})
