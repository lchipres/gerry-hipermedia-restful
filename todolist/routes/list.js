const express = require('express');
const router = express.Router();
const list = require('../controllers/index').list;
const group = '/lists';

router.get(group, list.getAll);
router.get(`${group}/:id`, list.getById);
router.post(group, list.add);
router.put(`${group}/:id`, list.update);
router.delete(`${group}/:id`, list.update);

module.exports = router;