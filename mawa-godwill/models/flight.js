const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    dob:{
        type: Date,
        trim:true,
    },
    nationality:{
        type: String,
        trim:true,
    },
    phone:{
        type: String,
        trim:true,
    },
    email:{
        type: String,
        trim:true,
    },
    pobox:{
        type: String,
        trim:true,
    },
    emergencyPhone:{
        type: String,
        trim:true,
    },
    passportNumber:{
        type: String,
        trim:true,
    },
    // visa:{
    //     type: String,
    //     trim:true,
    // },
    departureCity:{
        type: String,
        trim:true,
    },
    destinationCity:{
        type: String,
        trim:true,
    },
});

module.exports = mongoose.model('Flight', flightSchema);
