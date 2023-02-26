const router = require('express').Router();
const  { asyncHandler}  = require('../middlewares/asyncHandler');
const logController = require('../controllers/log.controller');


router.route('/addLog')
    .post(asyncHandler(logController.create));

router.route('/getLogs')
    .get(asyncHandler(logController.getLogs));

router.route('/getInfluencerLogs/:id')
    .get(asyncHandler(logController.getInfluencerLogs))
    


module.exports = router;
