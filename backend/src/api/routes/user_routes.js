const { isAuth } = require("../../middleware/auth");
const { upload } = require("../../middleware/files-users.middleware");
const { isAdmin } = require("../../middleware/is-admin");
const { getUsers, userLogin, userSignUp, deleteUser, updateUser, getUserById } = require("../controllers/user_controller");

const userRouter = require("express").Router()

userRouter.get("/all", getUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/new", upload.single('profilePicture'), userSignUp)
userRouter.post("/login", userLogin)
userRouter.put("/update/:id", upload.single('profilePicture'),[isAuth], updateUser)
userRouter.delete("/remove/:id", [isAdmin], deleteUser)

module.exports = userRouter
