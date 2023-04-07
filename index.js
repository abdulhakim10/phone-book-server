const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5500;

// middle wares
app.use(cors());
app.use(express.json());


// mongoose connect to DB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.47nvmfs.mongodb.net/phoneBook`;
mongoose.connect(uri,{ useNewUrlParser: true });


// root API
app.get('/', (req, res) => {
    res.send('Hello! server is on');
});

app.listen(port, () => {
    console.log('server is running on port', port);
});