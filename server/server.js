require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse aplication/json
app.use(bodyParser.json());

app.use(require('./routes/userController'));

mongoose.connect(process.env.URLDB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {

        if (err) throw err;
        console.log('Conectado a MongoDB');

    });


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT)
});