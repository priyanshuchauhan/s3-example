import s3 from 's3';
import AWS from 'aws-sdk';

const clientOld = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: "x",
    secretAccessKey: "x",
    region: "ap-south-1"
  }
});

const awsS3Client = new AWS.S3({
    accessKeyId: "x",
    secretAccessKey: "x",
    region: "ap-south-1",
    signatureVersion: 'v4'
});

const client = s3.createClient({
    s3Client: awsS3Client
});

export const upload = () => {
    var params = {
        localFile: "upload.txt",
        s3Params: {
          Bucket: "foo-logs",
          Key: "foo.txt",
        },
      };
      var uploader = client.uploadFile(params);
      uploader.on('error', function(err) {
        console.error("unable to upload:", err.stack);
      });
      uploader.on('progress', function() {
        console.log("progress", uploader.progressMd5Amount,
                  uploader.progressAmount, uploader.progressTotal);
      });
      uploader.on('end', function() {
        console.log("done uploading");
      });
}

export const downlod = () => {
    var params = {
        localFile: "down.txt",
        s3Params: {
          Bucket: "foo-logs",
          Key: "TODO.txt",
        },
      };

    var downloader = clientOld.downloadFile(params);
    downloader.on('error', function(err) {
        console.error("unable to download:", err.stack);
    });
    downloader.on('progress', function() {
        console.log("progress", downloader.progressAmount, downloader.progressTotal);
    });
    downloader.on('end', function() {
        console.log("done downloading");
    });
}