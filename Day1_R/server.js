require('dotenv').config();
const express = require('express');
const connectDB = require('./src/db/db.js')
const app = express();
app.use(express.json())
let notes = [];
app.get('/', (req, res) => {
    res.send('You entered!')
});
app.post('/note/add', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "Added Successfully!",
        notes
    })
});

app.get('/note', (req, res) => {
    res.send(notes);
});
app.patch('/note/update/:index', (req, res) => {
    const index = req.params.index;
    const { title } = req.body;

    notes[index].title = title;

    res.json({
        message: `title updated!`
    })

})

app.delete('/note/delete/:index', (req, res) => {
    const index = req.params.index;

    delete notes[index];

    res.json({
        message: `${index}no. data is deleted!`
    })
})

connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})