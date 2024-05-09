const { deleteImgCloudinary } = require("../../utils/delete_img_cloudinary");
const { generateSign } = require("../../utils/jwt");
const User = require("../models/user_model");
const bcrypt = require("bcrypt")



const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find()
    return res.status(200).json(allUsers)
  } catch (err) {
    return res.status(400).json(`error at getUsers: ${err}`)
  }
}

const userLogin = async (req, res, next) => {
  try {
    const userMail = await User.findOne({email:req.body.email})

    if(userMail){
      console.log(userMail)
      if(bcrypt.compareSync(req.body.password, userMail.passwordl)){
        const token = generateSign(userMail._id)
        return res.status(200).json({userMail, token})
      }
    }
  } catch (err) {
    return res.status(400).json(`error at userSignUp: ${err}`)
  }
}

const userSignUp = async (req, res, next) => {
  try {
    const newUser = new User({
      ...req.body
    })
    if(req.file){
      newUser.profilePicture = req.file.path
  }
    const userDuplicated = await User.findOne({email:req.body.email})
    if(userDuplicated){return res.status(400).json(`that email is already in use`)}
    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (err) {
    return res.status(400).json(`error at userSignup: ${err}`)
    
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userToDelete = await User.findById(id)
    if(userToDelete.profilePicture){deleteImgCloudinary(userToDelete.profilePicture)}

    const userDeleted = await User.findByIdAndDelete(id)

    return res.status(200).json(userDeleted)
  } catch (err) {
    return res.status(400).json(`error at deleteUser: ${err}`)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const originalUser = await User.findById(id)
    if(originalUser.profilePicture){deleteImgCloudinary(originalUser.profilePicture)}

    const newUser = new User(req.body)
    newUser._id = id

    if(req.file){newUser.profilePicture = req.file.path}

    const updatedUser = await User.findByIdAndUpdate(id, newUser, {new:true})
    return res.status(200).json(updatedUser)
  } catch (err) {
    return res.status(400).json(`error ar updateUser: ${err}`)
  }
}

