const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },

    designation : {
        type:String,
        required:true
    },

    age : {
        type : Number,
        required:true
    }
})


// exporting emplyeeSchema as employee 
module.exports = mongoose.model('employee',employeeSchema)

// Type of data 
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map
