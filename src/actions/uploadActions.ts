"use server";
import { v2 as cloudinary } from "cloudinary";
import uniqid from "uniqid";

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get("file") as File;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_API_SECRET as string,
  });

  const ext = file.name.split(".").slice(-1)[0];
  const newFilename = uniqid() + "." + ext;

  const chunks = [];
  // @ts-ignore
  for await (const chunk of file.stream()) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);

  // Convert the buffer to a base64 string
  const base64String = buffer.toString("base64");
  const base64File = `data:${file.type};base64,${base64String}`;

  const response = await cloudinary.uploader.upload(base64File, {
    public_id: newFilename,
    resource_type: "auto",
  });

  return {
    newFilename: response.public_id,
    ext,
    url: response.secure_url,
  };
}
