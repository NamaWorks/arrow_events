const cloudinary = require("cloudinary").v2

const deleteImgCloudinary = (imgUrl) => {
  console.log(imgUrl)
  const imgSplitted = imgUrl.split('/')
  const nameSplitted = imgSplitted[imgSplitted.length -1].split('.')
  const folderSplitted = imgSplitted[imgSplitted-2]
  const public_id = `${folderSplitted}/${nameSplitted[0]}`
  cloudinary.uploader.destroy(public_id, () => {
    console.log(public_id)
    console.log(`image deleted in cloudinary`)
  }) 
}

module.exports = { deleteImgCloudinary }