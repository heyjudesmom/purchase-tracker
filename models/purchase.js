const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    notes: {
        type: String, 
        match: /.{5}/ 
    }, 
    amount: {
        type: Number,
        require: true,
        min: 0,
    },
    recommend: Boolean,
    business: {type: Schema.Types.ObjectId, ref: 'Business'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Purchase', purchaseSchema)