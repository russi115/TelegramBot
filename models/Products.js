const { Schema, model} = require('mongoose')

const productSchema = new Schema({
    hashtag: {
        type: String
    },
    description: String
})

module.exports = model('Product', productSchema)