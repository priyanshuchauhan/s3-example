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

    import sum from './src/example'
    import {
        upload
    } from './awsS3upload'

    const result = sum(5, 2);

    console.log('Result: ', result);

    upload();