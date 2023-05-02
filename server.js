//puling in needed modules and files
const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes');

//creating express app 
const app = express();
//creating a Port 
const PORT = 3001

//laying out middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//starting server when db is created 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log('Social Network is running on Port %s', PORT)
    })
})
