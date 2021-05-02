const express = require('express');

const app = express();
const port = 8081;
const host = '0.0.0.0';

app.get('/',(req,res)=>
{
    res.send("Succefully dockerized nodejs application");
});

app.listen(port,host);
console.log(`Running on port ${port} and host ${host}`);