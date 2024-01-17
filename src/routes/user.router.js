const { getAll, create, getOne, remove, update, verifyCode, login, getLoggedUser, resetPassword, changePassword} = require('../controllers/user.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT')


const userRouter = express.Router();

userRouter.route('/users')
    .get(verifyJWT, getAll)
    .post(create);

userRouter.route('/users/login')
    .post(login)

userRouter.route('/users/me')
    .get(verifyJWT, getLoggedUser)


userRouter.route('/users/reset_password')
    .post(resetPassword)

// userRouter.route('/users/reset_password/:code')
//     .post(changePassword)
    

userRouter.route('/users/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

userRouter.route('/users/verify/:code')
    .get(verifyCode)


module.exports = userRouter;