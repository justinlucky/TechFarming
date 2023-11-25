const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    profile_pic: String,
    date_of_birth: Date,
    is_verified: Boolean,
    is_admin: Boolean,
    is_seller: Boolean,
    is_linkTo_SocialAccount: Boolean,
})

module.exports = mongoose.model('user', userSchema);