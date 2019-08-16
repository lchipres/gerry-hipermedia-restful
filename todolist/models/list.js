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
    }
}
const timestamps = {
    timestamps: true
}

const ListSchema = new Schema(fields, timestamps);

module.exports = mongoose.model('Lists', ListSchema);