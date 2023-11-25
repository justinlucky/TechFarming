const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: String,
    logo: String,
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location',
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category' 
    },
})

module.exports = mongoose.model('seller', sellerSchema);