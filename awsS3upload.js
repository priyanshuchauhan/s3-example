import { S3 } from 'aws-sdk';

const awsS3Client = new S3({
    accessKeyId: "x",
    secretAccessKey: "x",
    region: "ap-south-1",
    signatureVersion: 'v4'
});

export const upload = () => {
    var params = {
        Bucket: "foo-logs",
        Body: "heman df",
        Key: "baz.txt"
    };
    awsS3Client.upload(params,
        function (err, data) {
            if (err) {
                console.log('Upload failed');
            } else if (data) {
                console.log('Upload success');
            }
        }
    );
}