const express = require('express')
const router = express.Router();
const upload = require('../../middleware/multer')
const { uploadMultiImageImage, uploadSingleImage, uploadPDF, uploadImageUsingFS, downloadPdf, downloadJSONtoCsv, createPDF } = require('../../controller/Aggregation/uploadController')


router.post("/upload-single-image", upload.single('image'), uploadSingleImage)
router.post("/upload-image", upload.array('image', 1), uploadMultiImageImage)
router.post("/upload-pdf", upload.single('file'), uploadPDF)
router.post("/upload-using-fs", uploadImageUsingFS)
router.get("/download-file", downloadPdf)
router.get("/download-Json-converted-csv", downloadJSONtoCsv)
router.get("/open", createPDF)


module.exports = router