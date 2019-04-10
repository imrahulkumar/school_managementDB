const { addUser, addPost, getpostById } = require("../business/user.business");
const { errorHandler } = require("../../../helpers/errorHandling.helper");

//user register
const user_reg = async function user_reg(req, res) {
    try {
        const result = await addUser(req, res);
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(errorHandler(e))
    }
}

//post 
const post = async function post(req, res) {
    try {
        const result = await addPost(req, res);
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(errorHandler(e))
    }
}

getPostById = async (req, res) => {
    // req.params.id
    try {
        const result = await getpostById(req, res);
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(errorHandler(e))
    }

}



module.exports = {
    user_reg,
    post,
    getPostById
};