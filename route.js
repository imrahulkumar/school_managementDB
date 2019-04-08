
const student = require("./app/modules/student/routes/student.routes");
module.exports = [{
  path: "/api/user",
  handler: student
}
];
