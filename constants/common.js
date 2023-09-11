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
        EMAIL_OR_PASSWORD_NOT_EXIST: 'EMAIL_OR_PASSWORD_NOT_EXIST',
        EMAIL_EXISTED: 'EMAIL_EXISTED',
        DATA_NOT_EXIST: 'DATA_NOT_EXIST',
    },
    TIME_IN:  {
        MORNING: 'morning',
        LUNCH: 'lunch',
        DINNER: 'dinner',
        SNACK: 'snack',
    },
};
