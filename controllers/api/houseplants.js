const Houseplant = require('../../models/houseplant')


module.exports = {
    index,
    show,
    create,
    update, 
    delete: deleteHouseplant
}

function index(req, res){
    Houseplant.find({})
    .then((houseplants)=>{
        res.status(200).json(houseplants)
    })
}

function show(req, res){
    Houseplant.findById(req.params.id)
    .then((houseplant)=>{
        res.status(200).json(houseplant)
    })
}

function create(req, res){
    Houseplant.create(req.body)
    .then((houseplant)=>{
        res.status(201).json(houseplant)
    })
}

function update(req, res){
    Houseplant.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((houseplant)=>{
        res.status(201).json(houseplant)
    })
}

function deleteHouseplant(req, res){
    Houseplant.findByIdAndDelete(req.params.id)
    .then((houseplant)=>{
        res.status(200).json(houseplant)
    })
}