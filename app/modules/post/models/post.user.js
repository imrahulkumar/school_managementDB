const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const postSchema = new mongoose.Schema({
    post: { type: String },
    publish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});



var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);
module.exports = {
    User,
    Post
};
