const app = require("./src/index");

const startServer = () => {
    try {
        const server = app.listen(config.PORT, () => {
            logger.info(
                `${config.SERVICE_NAME} is running on http://localhost:${config.PORT}`
            );
        });

    } catch (error) {
        logger.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();