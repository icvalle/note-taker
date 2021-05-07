const db = require('../db/db.json');
const Notes = require('../db/notes.js');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });
    
    app.post('/api/notes', (req, res) => {
        const newNote = new Notes(req.body.title, req.body.text, 1);
        db.push(newNote);
        res.json(true);
    });
};