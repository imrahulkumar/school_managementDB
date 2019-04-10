const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var secret = process.env.secret_token;
// xx xx xxx xxx
// xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx
const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  country: String
});

const StudentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "first name is Required"]
    },
    lastname: {
      type: String,
      required: [true, "Name is Required"]
    },
    phone: {
      type: String
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email"
      },
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    address: AddressSchema,
    active: Boolean,
    role: {
      type: String,
      default: "student"
    },

  },
  {
    timestamps: true,
    versionKey: false
  }
);

StudentSchema.pre("save", function (next) {
  if (!!this.password) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});











var Student = mongoose.model("StudentSchema", StudentSchema);
module.exports = {
  Student
};