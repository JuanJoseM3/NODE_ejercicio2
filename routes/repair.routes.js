const express = require('express');
const router = express.Router();
const { repairExists } = require('../middlewares/repairs.middlewares');
const { createRepairValidations, checkValidations } = require('../middlewares/validations.middlewares');

const { getPendingRepairs, 
        getRepairById, 
        createRepair, 
        updateRepair, 
        deleteRepair } = require('../controllers/repairs.controller');

router
    .route('/')
    .get(getPendingRepairs)
    .post(createRepairValidations, checkValidations, createRepair);
    
router
    .use('/:id', repairExists)
    .route('/:id')
    .get(getRepairById)
    .patch(updateRepair)
    .delete(deleteRepair);

module.exports = { repairsRouter: router};