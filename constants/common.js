// @ts-check

module.exports = {
    QUEUE_NAMES: {
        EMAIL_NOTIFICATION: 'email_notification',
    },
    STATUS: {
        ACTIVE: 1,
        INACTIVE: 0,
    },
    TYPE_QUEUES: {
        BULL: 'bull',
        RABBIT: 'rabbit',
    },
    DEFAULT_TIMEOUT: 15000,
    ERROR_MESSAGES: {
        EMAIL_OR_PASSWORD_NOT_EXIST: 'Email or password not exists',
        EMAIL_EXISTED: 'Email Exists',
        DATA_NOT_EXIST: 'Data Not Exists',
        SYSTEM_ERROR: 'SYSTEM_ERROR',
        SEASON_TIER_EXISTED: 'Season and TierName existed',
    },
    TIME_IN:  {
        MORNING: 'morning',
        LUNCH: 'lunch',
        DINNER: 'dinner',
        SNACK: 'snack',
    },
    ROUND_TYPE: {
        WAITING: 'WAITING',
        PLAY_AROUND: 'PLAY_AROUND',
        PUZZLE: 'PUZZLE',
        TRADING: 'TRADING',
    },
    PUZZLE_TYPE: {
        MATCH_CALCULATION: 'MATCH_CALCULATION',
        PICTURE_PREDICTION: 'PICTURE_PREDICTION',
        SHEEP_COUNTER: 'SHEEP_COUNTER',
    },
};
