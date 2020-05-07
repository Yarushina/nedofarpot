const express = require('express');
const router = express.Router();

const SectionsController = require('../../app/controllers/SectionsController');

router.get('/', SectionsController.getSections);
router.get('/:id', SectionsController.getSectionsById);
router.post('/', SectionsController.createSection);
router.put('/:id', SectionsController.updateSection);
router.delete('/:id', SectionsController.deleteSection);
module.exports = router;
