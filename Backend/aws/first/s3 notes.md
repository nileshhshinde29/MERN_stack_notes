## configure s3
````jsx
const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
	        accessKeyId: 'YOUR_ACCESS_KEY_ID',
        	secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    }
})
````


## What is s3 bucket?
- It is stands for** simple storge service.** It is cloud storage container for storing an object.
- we can store files, images almost anything in bucket.

- single account can have multiple buckets. 100 max
- We can keep unlimited data in a single bucket.

## How to create bucket?
1. open S3.
2. click on create bucket.
3. add name for bucket, which is globally unique.
4. set privacy, by default its privet.
5. add.

### we can create bucket programatically.
1. import S3Client and CreateBucketCommand from client-s3
2. Create instance of s3 with adding region.
3. Sent s3.sent(new CreateBucketCommand({Bucket: "bucketName"})) 

``` jsx 
const { S3Client, CreateBucketCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({ region: "us-east-1" });

const createBucket = async (bucketName) => {
  const params = { Bucket: bucketName };
  try {
    const data = await s3.send(new CreateBucketCommand(params));
    console.log("Bucket created successfully", data.Location);
  } catch (err) {
    console.error("Error creating bucket", err);
  }
};

createBucket("my-unique-bucket-name");
```

## Bucket versioning:
- Versioning means keeping multiple versions of object in same bucket.
- It keeps current as well as previous version of object.
- It increases the cost.

## How to add privacy to bucket.
- We need to provide params ACL:acl when create bucket.
- We can change the privacy through  aws console as well. 

```jsx
const { S3Client, PutBucketAclCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({ region: "us-east-1" });

const setBucketAcl = async (bucketName, acl) => {
  const params = {
    Bucket: bucketName,
    ACL: "public-read", // "public-read" or "private"
  };

  try {
    await s3.send(new PutBucketAclCommand(params));
    console.log(`Bucket ${bucketName} set to ${acl}`);
  } catch (err) {
    console.error("Error setting ACL", err);
  }
};

setBucketAcl("my-unique-bucket-name", "public-read");

```

## how we can configure privacy of bucket.
- we can add to params to PutBucketPolicyCommand.
- we can define statement by using console as well. 
```jsx
const { S3Client, PutBucketPolicyCommand } = require("@aws-sdk/client-s3");
const s3 = new S3Client({ region: "us-east-1" });


const setBucketPolicy = async (bucketName) => {
  const params = {
    Bucket: bucketName,
    Policy: JSON.stringify(
         {
            Version: "2012-10-17",
            Statement: [
              {
                Sid: "PublicReadGetObject",
                Effect: "Allow",
                Principal: "*",
                Action: "s3:GetObject",
                Resource: `arn:aws:s3:::${bucketName}/*`,
              },
            ],
         };
        ),
       };

  try {
    await s3.send(new PutBucketPolicyCommand(params));
    console.log("Bucket policy set");
  } catch (err) {
    console.error("Error setting policy", err);
  }
};

setBucketPolicy("my-unique-bucket-name");
```
#upload file using s3
- can upload by using PutObjectCommand.
- in params we need to specify bucket key and body.

```jsx
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const uploadFile = async (bucketName, filePath, key) => {
  const fileStream = fs.createReadStream(filePath);

  const uploadParams = {
    Bucket: bucketName,
    Key: key, // e.g., 'folder/file.txt'
    Body: fileStream,
  };

  try {
    const data = await s3.send(new PutObjectCommand(uploadParams));
    console.log("File uploaded", data);
  } catch (err) {
    console.error("Error uploading file", err);
  }
};

uploadFile("my-bucket", "path/to/local/file.txt", "folder/file.txt");

```
#Download file
- by using GetObjectCommand,
- need to provide bucket, key.

```jsx
const { GetObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const downloadFile = async (bucketName, key, downloadPath) => {
  const downloadParams = { Bucket: bucketName, Key: key };

  try {
    const data = await s3.send(new GetObjectCommand(downloadParams));
    const writeStream = fs.createWriteStream(downloadPath);
    data.Body.pipe(writeStream);
    writeStream.on("close", () => {
      console.log("File downloaded successfully");
    });
  } catch (err) {
    console.error("Error downloading file", err);
  }
};

downloadFile("my-bucket", "folder/file.txt", "path/to/downloaded/file.txt");

```

# How to organize files and folders in an S3 bucket?
- S3 is a flat storage system, that means its saves all object at same level, there is no heirarchy like traditional file system.
-  but you can simulate folders by using prefixes in object keys.
  Example:
  File Key: folder1/subfolder2/file.txt
  This creates the appearance of directories in S3 (folder1/subfolder2/).
```jsx
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const uploadFile = async (bucketName, fileName, key) => {
  const fileStream = fs.createReadStream(filePath);

  const uploadParams = {
    Bucket: bucketName,
    Key:folder1/subfolder2/{fileName}, // e.g., '/file.txt'
    Body: fileStream,
  };

  try {
    const data = await s3.send(new PutObjectCommand(uploadParams));
    console.log("File uploaded", data);
  } catch (err) {
    console.error("Error uploading file", err);
  }
};

uploadFile("my-bucket", "file.txt", "folder/file.txt")
```

## ListObjectV2Command
- The ListObjectsV2Command used to list objects in an S3 bucket.
-  You can use the Prefix parameter to filter objects based on their key, simulating the behavior of listing files within a specific "folder" when using prefixes.
-  eg prefix:folder1  //  it will return all objects that are stored under the "folder1" key space.

```jsx
const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");

// Initialize S3 client
const s3 = new S3Client({ region: "us-east-1" });

const listObjectsInFolder = async (bucketName, folder) => {
  const listParams = {
    Bucket: bucketName,   // Your bucket name
    Prefix: folder,       // Folder path (e.g., "folder1/")
  };

  try {
    const data = await s3.send(new ListObjectsV2Command(listParams));
    if (data.Contents) {
      console.log(`Objects in folder ${folder}:`);
      data.Contents.forEach((item) => {
        console.log(item.Key); // Each object's key
      });
    } else {
      console.log(`No objects found in folder ${folder}`);
    }
  } catch (err) {
    console.error("Error listing objects", err);
  }
};

listObjectsInFolder("my-bucket", "folder1/"); // Adjust the bucket name and folder prefix

```
# How to delete folder?
- Using delete object command.

```jsx
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");

const deleteFile = async (bucketName, key) => {
  const deleteParams = { Bucket: bucketName, Key: key };

  try {
    await s3.send(new DeleteObjectCommand(deleteParams));
    console.log("File deleted");
  } catch (err) {
    console.error("Error deleting file", err);
  }
};

deleteFile("my-bucket", "folder/file.txt");

```

## How to configure lifecycle rules to archive or delete old objects?
- It is used to transition to cheaper storage class or automatically delete them after certain period.
- if data is not used from last 10 days then move to **Standard-IA** ==> reduce quality.
- if data is not used from last 20 days then move to **Glacier** ==> archive

```jsx 
const { PutBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3");

const setLifecyclePolicy = async (bucketName) => {
  const params = {
    Bucket: bucketName,
    LifecycleConfiguration: {
      Rules: [
        {
          ID: "Move to Glacier after 30 days",
          Prefix: "",
          Status: "Enabled",
          Transitions: [
            {
              Days: 30,
              StorageClass: "GLACIER",
            },
          ],
        },
      ],
    },
  };

  try {
    await s3.send(new PutBucketLifecycleConfigurationCommand(params));
    console.log("Lifecycle rule set");
  } catch (err) {
    console.error("Error setting lifecycle rule", err);
  }
};

setLifecyclePolicy("my-bucket");
```

## How to use S3 to host a static website?
You can host static websites directly from an S3 bucket.
Manually :
- in bucket go to properties
- Enable static website hoisting.
- add default page 

```jsx
const { PutBucketWebsiteCommand } = require("@aws-sdk/client-s3");

const enableWebsiteHosting = async (bucketName) => {
  const params = {
    Bucket: bucketName,
    WebsiteConfiguration: {
      IndexDocument: { Suffix: "index.html" },
      ErrorDocument: { Key: "error.html" },
    },
  };

  try {
    await s3.send(new PutBucketWebsiteCommand(params));
    console.log("Website hosting enabled");
  } catch (err) {
    console.error("Error enabling website hosting", err);
  }
};

enableWebsiteHosting("my-bucket");
```



  

    
