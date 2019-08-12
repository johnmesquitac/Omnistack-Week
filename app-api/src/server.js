const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const io= require('socket.io')(server);
const connectedUsers ={
} 

io.on('connect', socket => {
    const{user} = socket.handshake.query; // saving id user and protocol id
    connectedUsers[user]= socket.id;
});

mongoose.connect('mongodb+srv://AKIRAuser_admin:password@akiracluster-bvd0r.mongodb.net/Omnistack?retryWrites=true&w=majority', { useNewUrlParser:true});

app.use((req,res,next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);
