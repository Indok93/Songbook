import express from 'express';
import { router as SongRouter} from './Routes/song.router.js';
import { router as ArtistRouter} from './Routes/artist.router.js';

const app = express();
const port = 4000;

app.use(SongRouter);
app.use(ArtistRouter);

app.listen(port, () => {
    console.log(`Server kører på port ${port}`);
})