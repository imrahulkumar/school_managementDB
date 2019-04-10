const { Router } = require("express"),
    router = Router(),
    { student_registration, student_list, getStudentById, updateStudents, deleteStudents } = require("../../student/controllers/user.controller");

router.post("/registration", student_registration);
// http://localhost:8080/api/user/registration

router.get("/list", student_list);
// http://localhost:8080/api/user/list

router.get("/list/:id", getStudentById);
// http://localhost:8080/api/user/list/5cad7f32348d06569e7145b1

router.put("/list/:id", updateStudents);
// http://localhost:8080/api/user/list/5cad7f32348d06569e7145b1

router.delete("/list/:id", deleteStudents)


module.exports = router
