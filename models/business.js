const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model('Business', businessSchema)