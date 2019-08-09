const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://AKIRAuser_admin:password@akiracluster-bvd0r.mongodb.net/Omnistack?retryWrites=true&w=majority', { useNewUrlParser:true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(5000);