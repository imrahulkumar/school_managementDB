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





module.exports = {
    student_registration
};