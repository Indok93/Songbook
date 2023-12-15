import express from 'express';
import dotenv from 'dotenv';
import { router as SongRouter} from './Routes/song.router.js';
import { router as ContactRouter} from './Routes/contact.router.js';
import { router as ArtistRouter} from './Routes/artist.router.js';
import { router as songListRouter} from './Routes/songlist.router.js';
dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(SongRouter);
app.use(songListRouter);
app.use(ContactRouter);
app.use(ArtistRouter);

app.listen(port, () => {
    console.log(`Server kører på port ${port}`);
});