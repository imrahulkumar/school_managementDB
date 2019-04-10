const { msg } = require("../../../config/messages");
const { User, Post } = require("../models/post.user");
const { pickUserResponse } = require("../../../helpers/pickResponse.helper"),

    addUser = async (req, res) => {
        let body = req.body;
        let users = new User(body);
        let response = await users.save()
        if (response) {
            return {
                result: pickUserResponse(response),
                status: 200,
                message: msg.userRegistered
            };
        };

    };

addPost = async (req, res) => {
    let body = req.body;
    let post = new Post(body);
    let response = await post.save();
    if (response) {
        return {
            result: pickUserResponse(response),
            status: 200,
            message: msg.userRegistered
        };
    };
};


getpostById = async (req, res) => {
    // req.params.id
    let response = await Post.findById(req.params.id)
        .populate('publish');
    if (response) {
        return {
            result: response,
            status: 200
        }
    }
}





module.exports = {
    addUser,
    addPost,
    getpostById
}