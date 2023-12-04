class SongController {
    constructor() {
        console.log('Denne metode blive eksekveret når klassen kaldes');
    }

    list = (request, response) => {
        console.log('List metode på SongController');
    }
}

export default SongController