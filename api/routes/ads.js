const express = require('express');
const router = express.Router();

const adsController = require('../../app/controllers/AdsController');

router.post('/', adsController.createAds);
router.get('/:id', adsController.getUserAds);
router.delete('/:id', adsController.deleteAds);
router.get('/', adsController.getAllAds);
router.get('/section/:id', adsController.getAds);
router.put('/:user_id/:ads_id', adsController.updateAds);
module.exports = router;