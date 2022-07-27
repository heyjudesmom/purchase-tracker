const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: {type: String}, 
    city: {type: String}, 
    state: {type: String}, 
    zip: {type: Number},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true}) 

module.exports = mongoose.model('Business', businessSchema)