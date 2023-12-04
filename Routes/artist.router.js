import express from 'express';
import db from '../Config/db.config.js';
const router = express.Router();

router.get('/artister', (req, res) => {
        // Id hented fra url'ens GET parameter
        const id = req.query.id;

        // Forbereder vores SQL statement med en værdi markør
        const sql = `SELECT * FROM artist WHERE id = 6`;
        
        // Sender array med værdier med i query metoden - og binder dem til kaldet
        db.query(sql, [id], (error, result) => {
            res.json(result)
        })
})

export {router}