//7 load all our env variables from our .env file
require("dotenv").config();

//1 pull the express library
const express = require('express');

//2 create app variable that can be used to cofnigure our server
const app = express();

//4 configure mongoose to connect to our mongodb database
const mongoose = require('mongoose');

//5 connect to our database with our string that is our database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

//6 variable to run when our db is connected so we know its working correctly
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

//8 allows us to use any middleware that we want, which is code that runs when the server gets a request but before it get passed to your routes, express.json lets our server to accept json inside a body of a post element or get
app.use(express.json());

//9 routes
const subscribersRouter = require('./routes/subscribers');
//10
app.use('/subscribers', subscribersRouter);

//3 port where we want to listen add pass a fucntion that runs whenever our servcer gets started
app.listen(3000, () => console.log('Server Started'));