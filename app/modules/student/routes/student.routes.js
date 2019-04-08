const { Router } = require("express"),
    router = Router(),
    { student_registration} = require("../../student/controllers/user.controller");

router.post("/registration", student_registration);


module.exports = router
