const express = require('express');
const router = express.Router();

const reviewController = require('../../app/controllers/ReviewsController');

router.post('/', reviewController.createReview);
router.delete('/:id', reviewController.deleteReview);
router.get('/:id', reviewController.getReviews);
router.put('/:id', reviewController.updateReviews);
module.exports = router;