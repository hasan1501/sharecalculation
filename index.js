const express = require('express');
const bodyParser = require('body-parser');

// const month_router = require('./api/month');
// const receipt_router = require('./api/receipt');
const user_router = require('./api/user');

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.use('/month', month_router);
// app.use('/receipt', receipt_router);
app.use('/user', user_router);

app.listen(port, ()=> console.log(`Server starting at port ${port}`));