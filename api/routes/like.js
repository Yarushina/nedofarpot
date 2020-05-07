const express = require('express');
const router = express.Router();

const likeController = require('../../app/controllers/LikeController');

router.post('/:user_id/:ads_id', likeController.createLike);
router.delete('/:user_id/:ads_id', likeController.deleteLike);
router.get('/:id', likeController.getUserLike);
module.exports = router;