const { v2: cloudinary } = require("cloudinary");
const fs = require("fs/promises");

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

const uploadToCloudinary = async (localFilePath, folder) => {
    try {
        if (!localFilePath) {
            return new Error("Local file is required!");
        }

        let { secure_url, public_id } = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "image",
                folder,
            }
        );

        let result = await deleteLocalFile(localFilePath);
        if (!result) {
            return new Error("Couldn't delete local file");
        }

        return { secure_url, public_id };
    } catch (error) {
        await deleteLocalFile(localFilePath);

        return new Error(error.message);
    }
};

const deleteFromCloudinary = async (public_id) => {
    try {
        if (!public_id) {
            return new Error("Local file is required!");
        }

        let result = await cloudinary.uploader.destroy(public_id, {
            resource_type: "image",
        });

        return result;
    } catch (error) {
        return new Error(error.message);
    }
};

const deleteLocalFile = async (localFilePath) => {
    if (!localFilePath) {
        return null;
    }

    try {
        await fs.unlink(localFilePath);
        return true;
    } catch (error) {
        return null;
    }
};

module.exports = { uploadToCloudinary, deleteFromCloudinary };
