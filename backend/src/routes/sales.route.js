const router = require('express').Router();
const  { asyncHandler}  = require('../middlewares/asyncHandler');
const  salesController = require('../controllers/sales.controller');

router.route('/createSalesBrief')
    .post(asyncHandler(salesController.create))

router.route('/getSalesBriefsNotViewedByTalent')
    .get(asyncHandler(salesController.getBriefsNotViewedByTalent))

router.route('/getAllSalesBriefs')
    .get(asyncHandler(salesController.getAllBriefs))

router.route('/viewedByTalent/:id')
    .get(asyncHandler(salesController.ViewedByTalent))

router.route('/getSalesBrief/:id')
    .get(asyncHandler(salesController.getSalesBrief))

router.route('/getSalesBriefIdbyTaskId/:id')
    .get(asyncHandler(salesController.getSalesBriefIdByTaskId))
module.exports = router;