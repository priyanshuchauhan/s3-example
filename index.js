import express from 'express';
import {
    upload
} from './awsS3upload';
import { logger } from './config';


const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(`file upload started to S3`);
    upload();
    res.send(`Hello World! Result: ${result} and S3 upload started`);
});

app.get('/upload', (req, res) => {
    logger.log('error', {foo: 'bar'});
    return res.send("OK");
});

app.listen(port, () => console.log(`Hello app listening on port ${port}!`));
export default app;
