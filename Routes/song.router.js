import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).send('Velkommen til sangbogen');
});

export { router }