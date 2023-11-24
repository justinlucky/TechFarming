const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'seller',
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    price_range: {
        min: Number,
        max: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    },
    brand: String,
    manufacturer: {
        name: String,
        location: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'location',
        },
    },
    stock_quality: {
        type: Number,
        default: 0,
    },
    images: {
        image: [String],
        image_url: [String],
        image_alt: [String],
    }
})

module.exports = mongoose.model('product', productSchema);