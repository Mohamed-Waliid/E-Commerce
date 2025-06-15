const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
require('dotenv').config();
const DB = require('./DB/config');
const mountRoutes = require('./Routes');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.options('*', cors());


// Connect to MongoDB
DB();

// Routes
mountRoutes(app);

//listen
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});