const express=require('express');
const app=express();

const server=require('http').createServer(app);
const io=require('socket.io')(server);
const port=process.env.PORT || 3000;

//somethings missing here

const {v4:uuidv4}=require('uuid');
const {ExpressPeerServer}=require('peer');
const peerServer=ExpressPeerServer(server,{
    debug:true
});
//peer
app.use('/peerjs',peerServer);
//view engine
app.set('view engine','ejs');
//static files
app.use(express.static('public'));


//routes
app.get('/',(req,res)=>{
    res.send('Server is running');
});
//middleware
app.use(express.static('public'));
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
//routes
app.get('/room',(req,res)=>{
    res.redirect(`/${uuidv4()}`);
});
app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room});
});


//server
server.listen(port,()=>{
    console.log('Server is running on port '+port);
});
