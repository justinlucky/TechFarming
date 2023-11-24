const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
})

module.exports = mongoose.model('seller', sellerSchema);