import mongoose from "mongoose";


const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    feedback: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },

},{timestamps : true})

const User = mongoose.model("User", ColorSchema);
export default User;