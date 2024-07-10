const express=require('express');
const app=express();

const server=require('http').createServer(app);
const io=require('socket.io')(server);
const port=process.env.PORT || 3000;

//routes
app.get('/',(req,res)=>{
    res.send('Server is running');
});
//socket
io.on('connection',(socket)=>{
    console.log('User connected');
    socket.on('message',(msg)=>{
        console.log('Message: '+msg);
        io.emit('message',msg);
    });
    socket.on('disconnect',()=>{
        console.log('User disconnected');
    });
});
//server
server.listen(port,()=>{
    console.log('Server is running on port '+port);
});