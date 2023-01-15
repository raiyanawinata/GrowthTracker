const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // maxGrowth: {
    //     type: String,
    //     default: ''
    // },
    // soilType: {
    //     type: String,
    //     default: ''
    // },
    // soilPH: {
    //     type: String,
    //     default: ''
    // },
    // bloomTime: {
    //     type: String,
    //     default: ''
    // },
    // nativeArea: {
    //     type: String,
    //     default: ''
    // },
    color: {
        type: String,
        default: ''
    }

})

module.exports = mongoose.model('Plant', plantSchema);