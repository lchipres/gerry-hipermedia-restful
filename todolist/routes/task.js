const express = require('express');
const router = express.Router();
const task = require('../controllers/index').task;
const group = '/tasks';

router.get(group, task.getAll);
router.get(`${group}/:id`, task.getById);
router.post(group, task.add);
router.put(`${group}/:id`, task.update);
router.delete(`${group}/:id`, task.update);

module.exports = router;