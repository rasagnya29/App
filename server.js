// server.js

const express = require("express");
// require mongoose 
const mongoose = require("mongoose")

// initialize the app
const app = express();
const PORT = 8080;


//mongodb connection
connectDB()
.then(()=>console.log("DB is connected successfully"))
.catch(err => console.log("can not connect",err));

async function connectDB() {
  await mongoose.connect('mongodb+srv://user1:rassu123@cluster0.a6fdc.mongodb.net/user1?retryWrites=true&w=majority&appName=Cluster0');
}


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
