
const student = require("./app/modules/student/routes/student.routes");
const user = require("./app/modules/post/routes/post.routes")
module.exports = [{
  path: "/api/user",
  handler: student
},
{
  path: "/api/test",
  handler: user
}
];
