import { S3StreamLogger } from 's3-streamlogger';
import awsConfig from './awsConfig';

const S3StreamLoggerOption = {
    bucket: awsConfig.bucketName,
    config: awsConfig
}

const s3Stream = new S3StreamLogger(S3StreamLoggerOption);

//s3Stream.write('hello s3 from stream logger');

s3Stream.on('error', err => {
    console.log('Error sending logs to S3', err)
});

export default s3Stream;