const { isAuth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/is-admin");
const { getEvents, updateEvent, removeEvent, postEvent } = require("../controllers/event_controller");
const User = require("../models/user_model");

const eventsRouter = require("express").Router()

eventsRouter.get("/all", getEvents)
eventsRouter.post("/new", postEvent)
eventsRouter.put("/update/:id", updateEvent)
eventsRouter.delete("/remove/:id", removeEvent)

eventsRouter.get("/", async (req, res, next) => {
  try {
    const makers = await User.find().populate("attendants")
    console.log(makers);
    return res.status(200).json(makers)
  } catch (err) {
    return next(err)
  }
})

module.exports = eventsRouter