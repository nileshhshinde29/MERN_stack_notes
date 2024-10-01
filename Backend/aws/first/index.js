// AKIARW7EP7ZIXLRPRH6F
// "7NNzhmZMVhUL/U7Xi7guN5b3iR7OLSdXLqFo3sc1"

const { GetObjectCommand, S3Client } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
require('dotenv').config()


const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey
    }
})

async function getObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket: "privet-buket",
        Key: key,
    })

    const url = await getSignedUrl(s3Client, command, { expiresIn: 20 })
    return url


}

async function myFunction() {
    const url = await getObjectURL("first-img.png")
    console.log(url)
}
myFunction()