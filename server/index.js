const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req,res) {
    //when we deploy the project, we don't know the file structure heroku uses. go up one from current folder and send index.html
    res.sendFile(path.join(__dirname, '../index.html'));
})
//This will get the port var from heroku, if one isn't assigned it will use 4005
const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})