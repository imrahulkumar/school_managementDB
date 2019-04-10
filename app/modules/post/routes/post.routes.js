const { Router } = require("express"),
    router = Router(),
    { user_reg, post, getPostById } = require("../../post/controllers/user.controller");

router.post("/user", user_reg);
// http://localhost:8080/api/test/user

router.post("/post", post);
// http://localhost:8080/api/test/post


router.get("/postData/:id", getPostById)
// http://localhost:8080/api/test/post

module.exports = router