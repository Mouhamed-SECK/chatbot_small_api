const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

const messageRoutes = require('./routes')



app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

app.use('/message',messageRoutes)


app.listen(PORT, () => {
    console.log(`Server is listening on port  ${PORT}`);
});

