const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype == "application/pdf") {
            cb(null, "PDFfiles");

        }
        if (file.mimetype == "text/csv") {
            cb(null, "CSVfiles");
        }
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, "uploads");
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "application/pdf") {
            var ext = path.extname(file.originalname);
            if (ext !== ".pdf") {
                return callback(new Error("Only pdf files are allowed"));
            }
            callback(null, true);
        }

        if (file.mimetype == "text/csv") {
            var ext = path.extname(file.originalname);
            if (ext !== ".csv") {
                return callback(new Error("Only csv files are allowed"));
            }
            callback(null, true);

        }

        if (file.mimetype == "image/jpeg" || file.mimetype == 'image/png') {
            var ext = path.extname(file.originalname);
            if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
                return callback(new Error("Only images are allowed"));
            }
            callback(null, true);
        }


    },
});
module.exports = upload;
