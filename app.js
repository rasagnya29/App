const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

async (demo) => {
    try{
        await mongoose.connect(DB);
        const newSchema = new Schema({
            name: String,
            id : Number
        });
    } catch(error){
        console.log(error);
    };    
    
}

demo();

app.get('/', (req,res) => {
    res.send('hello world');
});

app.listen(process.env.port, () => 
    console.log('Example app listening on port')
);
