const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title:{type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    location:{type: String, required: true},
    capacity:{type: Number, required: false},
    attendants: [{type: mongoose.Types.ObjectId, ref: "users"}]
    // attendants: {type: String}
},{
  timestamps: true,
  collection: "events"
}
)

const Event = mongoose.model("events", eventSchema, "events")

module.exports = Event