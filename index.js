// Uncomment for lamda AWS
// exports.handler = async (event) => {

    import sum from './src/example'
    import {
        upload
    } from './awsS3upload'

    const result = sum(5, 2);

    console.log('Result: ', result);

    upload();