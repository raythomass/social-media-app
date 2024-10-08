const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },
    post_content: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);