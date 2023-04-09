const logger = (req, res, next) => {
    console.log(req.query)
    next()
}

module.exports = logger
