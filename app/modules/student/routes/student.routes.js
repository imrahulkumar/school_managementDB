const { Router } = require("express"),
    router = Router(),
    { user_register, user_login, user_verify } = require("../../student/controllers/user.controller");

router.post("/registration", user_register);
// router.post("/login", user_login);
// router.get("/verify", user_verify);

module.exports = router
