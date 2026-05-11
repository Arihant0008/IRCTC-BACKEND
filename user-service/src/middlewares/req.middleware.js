const logger = require('../config/logger');

const reqlogger = (req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info(`Request processed: ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms`);
    });

    next(); 
}

module.exports = {
    reqlogger
}