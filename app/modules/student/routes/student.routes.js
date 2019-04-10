const { Router } = require("express"),
    router = Router(),
    { student_registration, student_list } = require("../../student/controllers/user.controller");

router.post("/registration", student_registration);
router.get("/user", student_list);

module.exports = router
