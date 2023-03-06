const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const checkEmail = require('../middlewares/checkEmail');
const { signup: signupValidator, signin: signinValidator } = require('../validators/auth');
const authController = require('../controllers/auth.controller');

router.route('/register')
    .post(signupValidator, asyncHandler(checkEmail), asyncHandler(authController.register));

router.route('/login')
    .post(signinValidator, asyncHandler(authController.login));

router.route('/getUser/:id')
    .get(asyncHandler(authController.getUser)); 

router.route('/getTalentUserIdNames')
    .get(asyncHandler(authController.getTalentUserIdNames));


module.exports = router;




