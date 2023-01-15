const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    nativeArea: {
        type: String,
    }
})

module.exports = mongoose.model('Category', categorySchema);