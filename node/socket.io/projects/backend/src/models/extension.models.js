import mongoose from "mongoose";

const extensionSchema = new mongoose.Schema({
  byWhom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {  
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    default: "No reason provided",
   },
 
})

const Extension = mongoose.model("Extension", extensionSchema);

export default Extension;