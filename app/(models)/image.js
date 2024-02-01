import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djb1y5icg",
  api_key: "844739493649597",
  api_secret: "fGnJBSNdKNBGZADr2GfIN74Wif8",
});

const uploadImage = async (file) => {
  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(file);
    // Return the result
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

export default uploadImage;
