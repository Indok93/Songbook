import Song from '../Models/song.model.js';

export default class SongController {
    constructor() {
        console.log('SongController Instans');
    }

    list = async (req, res) => {
        const result = await Song.findAll({
            limit: 3,
            order: ['title']
        })
        res.json(result)
    }

    details = async (req, res) => {
        const result = await Song.findOne({
            where: { id: req.params.id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { title, content, artist_id } = req.body;

        if (title && content && artist_id) {
            const model = await Song.create(req.body);
            res.status(200).send({
                message: 'Record created',
                new_id: result.id
            })
        } else {
            res.status(403).send({
                message: 'Wrong parameter values'
            })
        }
    }

    update = async (req, res) => {
        const { title, content, artist_id } = req.body;

        if (title && content && artist_id && id) {
            const model = await Song.update(req.body, { where: {id: id}})
            return res.json({
                status: true
            })
        } else {
            res.send(418)
        }
    }

    delete = async (req, res) => {
        try {
            await Song.destroy({ where: { id: req.params.id }})
            res.sendStatus(200)
        }
        catch (err) {
            res.send(err)
        }
    }
}