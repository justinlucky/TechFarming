const mongoose = require('mongoose');

const recentSchema = new mongoose.Schema({
    category: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
})

module.exports = mongoose.model('recent', recentSchema);