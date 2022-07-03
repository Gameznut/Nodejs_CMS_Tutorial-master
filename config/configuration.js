require('dotenv').config()
module.exports = {
    mongoDbUrl : 'mongodb://localhost:27017/tutorial_cms' || process.env.MONGODBURI,
    PORT: process.env.PORT || 30000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');        
        
        next();
    }
}