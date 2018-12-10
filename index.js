import sum from './src/example'
import { downlod, upload } from './s3upload' 

const result = sum(5, 2);

console.log('Result: ', result);

upload();
// downlod();