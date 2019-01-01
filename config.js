import winston from 'winston';
import s3Stream from './s3-streamlogger';

export const options = {
    file: {
        level: 'info'
    },
    console: {
        level: 'debug',
        json: true
    },
    stream: s3Stream
}

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File({stream: options.stream})
    ]
})