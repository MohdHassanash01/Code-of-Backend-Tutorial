import {v2 as cloudinary} from 'cloudinary';

import fs from 'fs'



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY , 
        api_secret:process.env.CLOUDINARY_API_SECRET
    });


    const uploadOnCloudinary = async (localfilePath) => {
        try {
            if (!localfilePath) {
                return null
            }

// upload the file on cloudinary 
            const response = await cloudinary.uploader.upload(localfilePath, {
                resource_type: "auto"
            })


            // file has been uploaded successfull
            // console.log("file is uploaded on cloudinary ",response.url);
            fs.unlinkSync(localfilePath)
            return response

        } catch (error) {
            fs.unlinkSync(localfilePath) // remove the locally saved temperory file as the upload opertion got failed 
            return null
        }
    }

export {uploadOnCloudinary}

