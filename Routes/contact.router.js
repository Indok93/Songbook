import express from 'express';

const router = express.Router();

router.get('/contact', (request, response) => {
    response.status(200).send('Kontakt side');
});

export { router }