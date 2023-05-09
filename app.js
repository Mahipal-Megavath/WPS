const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const app=express();
const http = require('http')
const userModel = require('./model/userModel')
const uploadworks=require('./model/uploadworks')
const cors = require('cors');
const { workerData } = require("worker_threads");
const userRoutes=require('./Routes/userRoutes')
const messagesRoutes=require('./Routes/MessagesRoutes')
const socket=require("socket.io")
const mongodb=require('mongodb');



app.use(cors({ origin: '*', credentials: true }));
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://megavathsriram8985:Mahipal766@cluster0.x9o0gp4.mongodb.net/project').then(
    ()=>console.log('db connected')
    ).catch(err=>console.log(err))


const server = http.createServer(app);

app.use('/api/auth',userRoutes)
app.use('/api/messages',messagesRoutes)

// app.get("/validate",(req,res)=>{

// })

app.post("/vikas",(req,res)=>{
    console.log("called vikas")
    console.log(req.body)
    let user = new userModel(req.body);
    console.log(user)
    user.save().then(()=>{
        console.log("successfully inserted")
    })
    .catch((err)=>{
        console.log(err.message);
    })
    res.send("success")
})
app.post('/login',async(req,res)=>{
    try{
        console.log(req.body)
        let result = await userModel.findOne({email:req.body.email,password:req.body.password});
        if(result!=null)
            res.send({result:result,status:"success"})
        else
            res.send({status:"unsuccess"})
    }
    catch(error){
        res.send(error)
    }
})


app.post('/works',async(req,res)=>{
    try{
        console.log('calling work router')
        console.log(req.body)
        const{email,mobilenum,workstype,country,state,district,village,pincode} =req.body;
        let newworks=new uploadworks({
            email,mobilenum,workstype,country,state,district,village,pincode
        })
        // const err = newworks.validateSync();
        newworks.save();
        return res.status(200).send("Successfully work upload");
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Upload unsuccessfull");
    }
})
app.get('/works',async(req,res)=>{
    try{
        const works=await uploadworks.find();
        return res.json(works);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

server.listen(5000,()=>{

    console.log("listen on port 5000");
})

const io=socket(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true,
    }
})

global.onlineUsers=new Map()

io.on("connection",(socket)=>{
    global.chatSocket=socket;
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId,socket.id);
    })
    socket.on("send-msg",(data)=>{
        const sendUserSocket=onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve",data.message)
        }
    })
})

app.post('/delete',async(req,res)=>{
    try{
        console.log("..................................................")
        console.log(req.body)
        let works = req.body;
        let result = await uploadworks.deleteOne({email:works.email,state:works.state, mobilenum:works.mobilenum, workstype:works.workstype});
        console.log(result)
        if(result!=null)
            res.send({result:result,status:"success"})
        else
            res.send({status:"unsuccess"})
    }
    catch(error){
        res.send(error)
    }
})