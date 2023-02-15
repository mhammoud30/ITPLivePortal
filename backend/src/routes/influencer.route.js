const router = require('express').Router();
const  { asyncHandler}  = require('../middlewares/asyncHandler');
const influencerController = require("../controllers/influencer.controller");


router.route('/addInfluencer')
    .post(asyncHandler(influencerController.createInfluencer));

router.route('/getInfluencers')
    .get(asyncHandler(influencerController.getInfluencers));
    
module.exports = router;
