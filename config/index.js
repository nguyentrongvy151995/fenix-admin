exports.serverConfig = {
    port: process.env.PORT || 5000,
};

exports.getCORSOrigin = () => {
    const origins = process.env.ORIGINS || '*';
    return origins.split(',').map(o => o.trim());
};

exports.mongoConfig = {
    connection: process.env.MONGO_CONNECTION || 'mongodb+srv://nguyentrongvy151995:NyxPLPEFcJcu9euo@cluster0.ktwrhyv.mongodb.net/test',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

exports.redisConfig = {
    host: process.env.REDIS_HOST || 'redis://127.0.0.1:6379',
};

exports.commonConfig = {
    env: process.env.NODE_ENV || 'development',
    serviceName: process.env.SERVICE || 'app',
};

exports.loggerConfig = {
    service: process.env.SERVICE || 'app',
    streamType: process.env.STREAM_TYPE || 'local',
    elasticHost: process.env.ELASTIC_HOST,
    elasticUser: process.env.ELASTIC_USER,
    elasticPass: process.env.ELASTIC_PASS,
    group: process.env.CW_GROUP,
    prefix: process.env.CW_PREFIX,
    interval: process.env.CW_INTERVAL || 1000,
    awsRegion: process.env.AWS_REGION,
    awsAccessKeyId: process.env.CW_AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.CW_AWS_SECRET_ACCESS_KEY,
    level: process.env.LOG_LEVEL || 'info',
};