//use express (restful api framework), assign app variable for it
const express = require('express');
const app = express();

//SERVER MIDDLEWARE
//use dotenv to store secret info 
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('server working')
});

//express app listens on port and confirms server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});