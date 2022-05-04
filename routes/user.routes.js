const express = require('express');
const router = express.Router();
const { userExists } = require('../middlewares/users.middlewares');
const { createUserValidations, checkValidations } = require('../middlewares/validations.middlewares');

const { getAllUsers, 
        getUserById, 
        createUser, 
        updateUser, 
        deleteUser } = require('../controllers/users.controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUserValidations, checkValidations, createUser);

router
    .use('/:id', userExists)
    .route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = { usersRoter: router };