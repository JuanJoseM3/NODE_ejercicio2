const { Repair } = require('../models/repair.model');
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

const repairExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id, status: 'pending' } });

    if (!repair) {
        return next(new AppError(`Repair not found for id ${id}`, 404));
    }

    req.repair = repair;
    next();
});

module.exports = { repairExists };
