const router = require('express').Router();
const { asyncHandler}  = require('../middlewares/asyncHandler');
const TaskController = require('../controllers/task.controller');

router.route('/createTask')
    .post(asyncHandler(TaskController.create))

router.route('/getUnfinishedTasks')
    .post(asyncHandler(TaskController.getUnfinishedTasks))

router.route('/getMyTasks')
    .post(asyncHandler(TaskController.getMyTasks))
    
router.route('/updateStatus')
    .post(asyncHandler(TaskController.updateStatus))    
module.exports = router;