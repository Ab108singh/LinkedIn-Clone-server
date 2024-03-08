const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!req.user) {
            cb(new Error("Cannot Upload Image"));
            return;
        }

        cb(null, path.resolve("./uploads"));
    },
    filename: (req, file, cb) => {
        const prefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = prefix + "-" + file.originalname.split(" ").join("-");
        cb(null, filename);
    },
});

let upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "image/avif",
        ];

        if (allowedMimeTypes.includes(file.mimetype)) cb(null, true);
        else
            cb(new Error("File of type " + file.mimetype + " is not allowed."));
    },
});

module.exports = upload;
