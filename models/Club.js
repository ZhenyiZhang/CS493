const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new  Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    });
    
    module.exports = Club = mongoose.model('club', ClubSchema);