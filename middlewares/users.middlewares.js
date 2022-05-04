const { User } = require('../models/user.model');
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

const userExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id, status: 'active' } });

    if (!user) {
        return next(new AppError(`User not found for the id ${id}`, 404)); //Se encarga de dirigir la ejecución del código a Global Error Handler en caso de detectar un error
    }

    req.user = user;
    next();
});

module.exports = { userExists };
