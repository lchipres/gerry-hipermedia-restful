'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fields = {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
}
const timestamps = {
    timestamps: true
}

const TaskSchema = new Schema(fields, timestamps);

module.exports = mongoose.model('Tasks', TaskSchema);