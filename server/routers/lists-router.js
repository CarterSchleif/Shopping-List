const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ListSchema = new Schema({
    postedBy: {type: String, required: true},
    listName: {type: String, required: true},
    listItems: {type: Array, required: false},
});

const List = mongoose.model('List', ListSchema, 'lists');


router.post('/', (request, response) => {
    let newList = new List(request.body);
    console.log('List to save is', request.body);
    newList.save((error, savedList) => {
        if (error){
            console.log('error on addList:', error);
            response.sendStatus(500);
        } else {
            response.sendStatus(201);
        }
    })
});

router.put('/:id', (request, response) => {
    let id = request.params.id;
    console.log('THIS IS the ID in router.PuT', id);
    
    let updatedList = request.body;
    List.findByIdAndUpdate(
      {"_id": id},
      {$set: updatedList},
      (error, success) => {
        if(error){
          console.log('Error in router.put', error);
          response.sendStatus(500);          
        } else {
          response.sendStatus(200);
        }
      }
    )
  })

module.exports = router;