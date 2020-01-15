//const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
//const List = require('./models/list')
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

const apiRoutes = require('./routes/apiRoutes');
app.use(apiRoutes);

sequelize
    .sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => console.log(err));

