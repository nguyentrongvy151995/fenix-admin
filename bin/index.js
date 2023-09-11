// @ts-check

require('dotenv').config();

const { serverConfig } = require('../config');
const logger = require('../components/logger');

const app = require('./server');
const errorHandler = require('../components/error-handler');
const { connectMongo } = require('../components/connect-mongo');

// load models
require('./model');

const loadAPI = require('./routes');
const { connectRedis } = require('../components/redis');

function runServer(server, port) {
    return new Promise(res => {
        server.listen(port, res);
    });
}

async function main() {
    const { port } = serverConfig;

    // connect db
    await connectMongo();

    // inject api
    loadAPI(app);

    // inject error handler
    app.use(errorHandler(logger));

    await runServer(app, port);
    // logger.info(`Server started at port ${serverConfig.port}`);
    console.log(`Server started at port ${serverConfig.port}`);
}

main().catch(err => {
    logger.error(err, 'kill process');
    process.exit(1);
});
