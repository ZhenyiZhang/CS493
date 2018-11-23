const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clubs = require('./routes/api/clubs');

const app = express();

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
 .connect(db)
 .then(() => console.log('mongodb connected'))
 .catch(err => console.log(err))

//use routes
app.use('/api/clubs', clubs);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('server started on port 5000')); 