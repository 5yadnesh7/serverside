const { default: axios } = require("axios");
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 2121

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(bodyParser.json());

app.get('/', async function (req, res) {
    res.send("<center><h1>Hello Yadnesh</h1></center")
})
app.post('/get', async function (req, res) {
    const { datas } = req.body;
    const resp = await axios.get(datas);
    res.send(resp.data)
})

app.listen(PORT, () => {
    console.log(`Serve is running on ${PORT}`)
})
