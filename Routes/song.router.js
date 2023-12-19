import express from 'express';
import sequelize from '../Config/db.sequelize.js';
import SongController from '../Controllers/song.controller.js';

const router = express.Router();

// Instans
const controller = new SongController();


router.get('/songs', (req, res) => { controller.list(req, res) });
router.get('/songs/:id([0-9]*)', (req, res) => { controller.get(req, res) });


export { router as SongRouter }