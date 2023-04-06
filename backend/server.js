const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const notes = require('./data/notes');
app.get('/', function(req, res){ 
    res.send('<h1>App is running</h1>');
})
app.get('/api/notes', function(req, res){
res.send(notes)
});
app.get('/api/notes/:id', function(req, res){
    const note = notes.find((n)=>n._id === req.params.id);
    res.send(note);
})
const port = process.env.PORT || 5500;
app.listen(port, console.log(`Express listening on port ${port}`));
