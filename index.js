/**
    Uncomment for lamda AWS
    exports.handler = function(event, context, callback) {
        console.log("Hello");
        const response = {
             statusCode: 200,
             headers: {
                 "x-custom-header" : "my custom header value"
             },
             body: "hello lambda"
         };
         callback(null, response);
        // TODO: Move build code here
     }
*/

import express from 'express';
import sum from './src/example'
import {
    upload
} from './awsS3upload'

const result = sum(5, 2);

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const result = sum(5, 2);
    console.log(`file upload started to S3`);
    upload();
    res.send(`Hello World! Result: ${result} and S3 upload started`);
});

//app.listen(port, () => console.log(`Hello app listening on port ${port}!`));
export default app;
