const mongoose =require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,    
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },

})

var employeedata=mongoose.model('employeedata',employeeSchema);
module.exports= employeedata;
