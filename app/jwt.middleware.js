var { User } = require("./modules/user/models/user.model.js");
const message = require("./config/messages"),
  { errorHandler } = require("./helpers/errorHandling.helper");

exports.jwt_middleware = async (req, res, next) => {
  try {
    const auth = req.header("Authorization");
    if (!auth) throw message.msg.unauthorisedRequest;

    const token = auth.substr(auth.indexOf(" ") + 1);
    const user = await User.findByToken(token);
    req.user = user;
    if (!user) throw message.msg.unauthorisedRequest;
    return next();
  } catch (err) {
    const error = errorHandler(err, 401);
    return res.status(error.status).send(error);
  }
};
