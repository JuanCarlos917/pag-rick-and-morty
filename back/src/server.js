const express = require('express');
const app = express();
const PORT = 3001;
const router = require('./routes/index');

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

app.use(express, json())

app.use('/', router);



module.exports = app