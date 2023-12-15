import express from 'express';

const router = express.Router();

router.get('/artist', (request, response) => {
    response.status(200).send('Se liste over artister');
});

export { router }