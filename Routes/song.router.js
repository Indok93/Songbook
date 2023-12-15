import express from 'express';
import db from '../Config/db.config.js';

const router = express.Router();
const sql = `SELECT * FROM song`;
router.get('/', (request, response) => {
    response.status(200).send('Velkommen til sangbogen');
    db.query(sql, (error,result) => {
        console.log(result);
    });
});

export { router }