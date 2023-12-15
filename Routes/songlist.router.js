import express from 'express';
import db from '../Config/db.config.js';

const router = express.Router();
const sql = `SELECT song.title, artist.name FROM song JOIN artist ON song.artist_id = artist.id ORDER BY title`;
router.get('/list', (request, response) => {
    response.status(200).send('Velkommen til sangbogen');
    db.query(sql, (error,result) => {
        console.log(result);
    });
});

export { router }