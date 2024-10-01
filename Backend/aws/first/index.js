// AKIARW7EP7ZIXLRPRH6F
// "7NNzhmZMVhUL/U7Xi7guN5b3iR7OLSdXLqFo3sc1"

const { GetObjectCommand, S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
require('dotenv').config()


const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {

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

async function putObject(filename, contentType) {
    const command = new PutObjectCommand({
        Bucket: "privet-buket",
        Key: `uploads/${filename}`,
        ContentType: contentType
    })

    const url = await getSignedUrl(s3Client, command)
    return url


}

async function listObject(filename, contentType) {
    const command = new ListObjectsV2Command({
        Bucket: "privet-buket",
        Key: `/`,
    })

    const url = await s3Client.send(command)
    return url


}

async function deleteObject(key) {
    const command = new DeleteObjectCommand({
        Bucket: "privet-buket",
        Key: key,
    })

    const url = await s3Client.send(command)
    return url


}

async function myFunction() {
    // const url = await getObjectURL("uploads/img-1727762543449.jpeg")
    // console.log(url)

    // const url = await putObject(`img-${Date.now()}.jpeg`, 'image/jpeg')
    // console.log(url)

    // const url = await listObject()
    // console.log(url)

    const url = await deleteObject("uploads/img-1727762543449.jpeg")
    console.log(url)
}
myFunction()