import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_APIKEY,
	api_secret: process.env.CLOUDINARY_APISECRET,
});

export const uploadImage = async (base64Image, folderName) => {
	try {
		// Upload the Base64 image to Cloudinary
		const result = await cloudinary.uploader.upload(base64Image, {
			folder: folderName,
		});

		return result.secure_url;
	} catch (error) {
		console.error("Error uploading image:", error);
		throw error;
	}
};
