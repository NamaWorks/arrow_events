const cloudinary = require("cloudinary").v2

const deleteImgCloudinary = (imgUrl) => {
  console.log(imgUrl) 
  const imgSplitted = imgUrl.split('/')
  console.log(imgSplitted) 
  const nameSplitted = imgSplitted[imgSplitted.length -1].split('.') 
  console.log(nameSplitted) 
  const folderSplitted = imgSplitted[imgSplitted.length -3] + '/' + imgSplitted[imgSplitted.length -2]
  console.log(folderSplitted) 
  const public_id = `${folderSplitted}/${nameSplitted[0]}`
  console.log(public_id) 
  cloudinary.uploader.destroy(public_id, () => {
    console.log(public_id)
    console.log(`image deleted in cloudinary`)
  }) 
}

module.exports = { deleteImgCloudinary }