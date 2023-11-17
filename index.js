const express = require('express');
require('./database/connect');
const TeamRank = require('./models/teamRank');
const router = require('./routers/ranking');
const app = express();
const port = process.env.port || 8000;

app.use(express.json());
app.use(router);

app.get('/',(req,res) => {
    res.send("Connected to Express! (Get)");
})

app.listen(port,()=>{
    console.log(`App is listening to port number ${port}`);
})