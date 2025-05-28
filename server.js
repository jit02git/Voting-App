const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})