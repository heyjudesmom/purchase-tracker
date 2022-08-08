const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
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
    business: {required: true, type: Schema.Types.ObjectId, ref: 'Business'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Purchase', purchaseSchema)