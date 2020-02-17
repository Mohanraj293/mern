const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');

const app = express();

//bodyparser
app.use(cors());
app.use(bodyParser.json());



//Middleware
app.use(morgan('dev'));

//router
const StudentRouter = require('./StudentRoute');
app.use('/students',StudentRouter);

//LocalHost
const port = process.env.port || 2000;

app.listen(port, () => console.log(`server started on port ${port}`));

//DB Server Creation 
mongoose
    .connect('mongodb+srv://mohanraj:5683263464@mern-app-ilfch.mongodb.net/myStudents?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo Connected...'))
    .catch(err => console.log(err)); 