const router = require('express').Router();
const  { asyncHandler}  = require('../middlewares/asyncHandler');
const influencerController = require("../controllers/influencer.controller");
 

router.route('/addInfluencer')
    .post(asyncHandler(influencerController.createInfluencer));

router.route('/getInfluencers')
    .get(asyncHandler(influencerController.getInfluencers));

router.route('/deleteInfluencer/:id')
    .delete(asyncHandler(influencerController.deleteInfluencer));

router.route('/getInfluencer/:id')
    .get(asyncHandler(influencerController.getInfluencer))

router.route('/getInfluencerNames')
    .get(asyncHandler(influencerController.getInfluencerNames))

router.route('/updateInfluencer/:id')
    .patch(asyncHandler(influencerController.updateInfluencer))

module.exports = router;
