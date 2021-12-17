const express = require('express')
const router = express.Router()
const operation = require('../models.js/crud_models')


// get method  
router.get('/display', async (req, res) => {
    try {
        const action = await operation.find()
        res.json(action)
    } catch (err) {
        res.send('Error ' + err)
    }
})

// get by ID
router.get('/get:id', async (req, res) => {
    try {
        // req.params.id is used to get id from url 
        const action = await operation.findById(req.params.id)
        console.log(req.params.id)
        res.json(action)
    } catch (err) {
        res.send('Error ' + err)
    }
})


// post method 
router.post('/insert', async (req, res) => {
    const action = new operation({
        name: req.body.name,
        designation: req.body.designation,
        age: req.body.age
    })
    console.log(action)

    try {
        const a1 = await action.save()
        res.json(a1)
    } catch (err) {
        res.send('Error ' + "(All fields are mandatory)")
    }
})


// patch/ID method 
router.patch('/:id',async(req,res)=> {
    try{
        const action = await operation.findById(req.params.id) 
        console.log(action)
        action.name = req.body.name
        console.log(action.name)
        const a1 = await action.save()
        res.json(a1)   

    }catch(err){
        res.send('Error')
    }
})

// delete method 
router.delete('/:id', async (req, res) => {

    try {
        
        const action = await operation.findById(req.params.id)
        action.sub = req.body.sub
        const a1 = await action.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})


module.exports = router