import express from 'express';
import SongController from '../Controllers/song.controller.js';
const song = new SongController()

const router = express.Router();

router.get('/songs', (req,res) => {
    console.log('Route til alle sange');
    song.list()
})
// Hent enkelt sang
router.get('/songs/:id([0-9]*)', (req,res) => {
    // Destructure assignment som henter id fra req params
    const {id} = req.params
    console.log(`Route til sang detaljer ud fra id ${id}`)
})

// Opret sang
router.post('/songs', (req,res) => {
    const { title, content, artist_id } = req.body
    console.log('Route til at oprette en sang med', req.body)
})

// Opdater sang
router.put('/songs', (req,res) => {
    const { id, title, content, artist_id } = req.body
    console.log('Route til at opdatere en sang med', req.body)
})

// Slet sang med URL parameter
router.delete('/songs/:id([0-9]*)', (req,res) => {
    const { id } = req.params
    console.log(`Route til at slette en sang via URL parameter: ${id}`);
})

// Slet sang med form body data
router.delete('/songs', (req,res) => {
    const { id } = req.body
    console.log(`Route til at slette en sang via form body: ${id}`);
})

export {router}