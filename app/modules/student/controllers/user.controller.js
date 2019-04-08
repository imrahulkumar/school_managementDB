const { registration } = require("../business/user.business");
const { errorHandler } = require("../../../helpers/errorHandling.helper");



//school student register
const student_registration = async function student_registration(req,res){
    try{
         const result = await registration(req,res);
         res.status(200).send(result);
    }
    catch (e){
          res.status(400).send(errorHandler(e))
    }
}





// login an existing user and generate refresh jwt token
// const user_login = async function user_login(req, res) {
//     try {
//         const result = await login(req.body);
//         res.status(200).send(result);
//     }
//     catch (e) {
//         res.status(400).send(errorHandler(e));
//     }
// }

// const user_verify = async function user_verify(req, res) {
//     try {
//         const result = await verify(req, res);
//         res.status(200).send(result);
//     }
//     catch (e) {
//         res.status(400).send(errorHandler(e));
//     }
// }


// module.exports = {
//     user_register,
//     user_login,
//     user_verify
// };