require('./db');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const authRoute = require('./routes/auth.route')
const movieRoute = require('./routes/movies.route');
const actorRoute = require('./routes/actor.route')
const producerRoute = require('./routes/producer.route')


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute)
app.use('/movies', movieRoute);
app.use('/actors', actorRoute);
app.use('/producers', producerRoute)

app.listen(8080, () => console.log("server running"));