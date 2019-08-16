'use strict';
const mongoose = require('mongoose');
List = mongoose.model('Lists');

function getAll(req, res) {
    List.find({}, function (err, list) {
        if (err) res.send(err);
        res.send(list);
    });
}

function getById(req, res) {
    List.findById(req.params.id, function (err, list) {
        if (err) res.send(err);
        res.send(list);
    })
}

function add(req, res) {
    const newList = new List(req.body);
    newList.save(function (err, list) {
        if (err) res.send(err);
        res.send(list)
    });
}

function update(req, res) {
    List.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function (err, list) {
        if (err) res.send(err);
        res.send(list);
    });
}

function destroy(req, res) {
    List.remove({
        _id: req.params.id
    }, function (err, list) {
        if (err) res.send(err);
        res.send({
            message: 'List deleted'
        });
    });
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    destroy
}