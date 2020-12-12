const mongoose = require('mongoose')
const Schema = mongoose.Schema


const houseplantSchema = new Schema({
    name: String,
    description: String,
    imageUrl: String, 
},{
    timestamps: true
})

module.exports = mongoose.model('Houseplant', houseplantSchema)

