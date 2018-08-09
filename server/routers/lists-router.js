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



module.exports = router;