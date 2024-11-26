const mongoose = require ("mongoose");

//define the Person schema
const personSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true, 
    },
    age: {
        type: String,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address:{
        type:String,
    },
    salary:{
        type: String,
        required: true
        
    }
})
// create Person model
const Person =mongoose.model('Person',personSchema);
module.exports = Person;



