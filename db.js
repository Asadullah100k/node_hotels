const mongoose = require('mongoose');


// Define the mongoDB connection URL
const mongoURL =  'mongodb://127.0.0.1:27017/hotels'

//Set up mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//mongos
const db = mongoose.connection;

db.on('connected',() => {
    console.log('connected to mongoDB server');
});

db.on('error', (err)=>{
    console.error('mongoDB connection error', err);
});
db.on('disconnected', ()=>{
    console.log('mongoDB disconnected');
});
 
//Export the database connection
module.exports = db;