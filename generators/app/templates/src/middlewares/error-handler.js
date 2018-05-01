const httpStatus = require('http-status')

module.exports = (err, req, res, next) => {
    console.log('------------------------------------');
    console.error(err);
    console.log('------------------------------------');
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err })
}