const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connect to DB');
    })
}

module.exports = connectDB;