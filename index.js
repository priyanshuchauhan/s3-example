import sum from './src/example'
import { upload } from './awsS3upload' 

const result = sum(5, 2);

console.log('Result: ', result);

upload();
// downlod();