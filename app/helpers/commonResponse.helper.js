let { pickSociailAccountCredentials } = require("./pickResponse.helper"),
    { generateAuthToken } = require("./../util/generate.token"),
    { msg } = require("../config/messages");

exports.socialloginResonse = async (data) => {
    return {
        result: pickSociailAccountCredentials(data),
        status: 200,
        token: await generateAuthToken(data),
        message: msg.loggedIn
    };
}