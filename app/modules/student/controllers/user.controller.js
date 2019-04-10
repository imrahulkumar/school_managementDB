const { registration, getAllUserList, getStudentByIds, updateStudent, deleteStudent } = require("../business/user.business");
const { errorHandler } = require("../../../helpers/errorHandling.helper");



//school student register
const student_registration = async function student_registration(req, res) {
    try {
        const result = await registration(req, res);
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(errorHandler(e))
    }
}

//get all student list
const student_list = async (req, res) => {
    try {
        const result = await getAllUserList();
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    }
};

//get student by id
const getStudentById = async (req, res) => {
    try {
        const result = await getStudentByIds(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    }
}

//update student
const updateStudents = async (req, res) => {
    try {
        const result = await updateStudent(req.body, req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    }
}

const deleteStudents = async (req, res) => {
    try {
        const result = await deleteStudent(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    }
}



module.exports = {
    student_registration,
    student_list,
    getStudentById,
    updateStudents,
    deleteStudents
};