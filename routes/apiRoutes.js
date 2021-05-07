const db = require('../db/db.json');
const Notes = require('../db/notes.js');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });
    
    app.post('/api/notes', (req, res) => {
        const newNote = new Notes(req.body.title, req.body.text, uuidv4());
        db.push(newNote);
        res.json(true);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const idNote = (element) => element.id === req.params.id;
        const deleteNote = db.findIndex(idNote);
        db.splice(deleteNote, 1);
        res.json(db);
    });
};
