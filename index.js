import express from 'express';
import { router as SongRouter} from './Routes/song.router.js';
import { router as ContactRouter} from './Routes/contact.router.js';
import { router as ArtistRouter} from './Routes/artist.router.js';

const app = express();

app.use(SongRouter);
app.use(ContactRouter);
app.use(ArtistRouter);

app.listen(4000, () => {
    console.log('Server kører på port 4000');
});