const mongoose = require('mongoose');
require('dotenv').config();


// Define the mongoDB connection URL
//const mongoURL = process.env.MongoDb_Url;
const mongoURL = process.env.MongoDb_Url;

//Set up mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a database connection object
const db = mongoose.connection;

// Event listeners for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
