'use strict';
const mongoose = require('mongoose');
Task = mongoose.model('Tasks');

function getAll(req, res) {
    Task.find({}, function (err, Task) {
        if (err) res.send(err);
        res.send(Task);
    });
}

function getById(req, res) {
    Task.findById(req.params.id, function (err, Task) {
        if (err) res.send(err);
        res.send(Task);
    })
}

function add(req, res) {
    const newTask = new Task(req.body);
    newTask.save(function (err, Task) {
        if (err) res.send(err);
        res.send(Task)
    });
}

function update(req, res) {
    Task.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function (err, Task) {
        if (err) res.send(err);
        res.send(Task);
    });
}

function destroy(req, res) {
    Task.remove({
        _id: req.params.id
    }, function (err, Task) {
        if (err) res.send(err);
        res.send({
            message: 'Task deleted'
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