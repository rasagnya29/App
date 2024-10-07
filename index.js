const express= require('express');
const mongoose= require('mongoose');

const app=express();

const port=8080;

mongoose.connect('mongodb+srv://user1:rassu123@cluster0.a6fdc.mongodb.net/user1?retryWrites=true&w=majority&appName=Cluster0');
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const employeerouter= require("./routes/employees");
app.use('/employees',employeerouter)



app.listen(port, () =>{
    console.log('Server started');
})
