const mongoose = require('mongoose')
const Schema = mongoose.Schema

const houseplantSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, min: 1, max: 100, default: 25},
    mature: {type: Boolean, required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Houseplant', houseplantSchema)

