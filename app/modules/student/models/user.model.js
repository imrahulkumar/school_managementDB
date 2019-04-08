const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var secret = process.env.secret_token;

// xx xx xxx xxx

// const UserSchema = new mongoose.Schema(
//   {
//     firstname: {
//       type: String,
//       required: [true, "first name is Required"]
//     },
//     lastname: {
//       type: String,
//       required: [true, "Name is Required"]
//     },
//     phone: {
//       type: String
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 1,
//       validate: {
//         validator: validator.isEmail,
//         message: "{VALUE} is not a valid email"
//       },
//       lowercase: true
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"]
//     },
//     fax: Number,
//     active: Boolean,
//     newsLetter: {
//       type: Boolean,
//       default: false
//     },
//     recentlyViewedItem: Array,
//     role: {
//       type: String,
//       default: "user"
//     },
//     address: AddressSchema,
//     wishlist: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Wishlist"
//     }
//   },
//   {
//     timestamps: true,
//     versionKey: false
//   }
// );

//xx xxx xxx xxx xx xx

// UserSchema.pre("save", function (next) {
//   if (!!this.password) {
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(this.password, salt, (err, hash) => {
//         if (err) {
//           return next(err);
//         }
//         this.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });


// xx  xxx xxx
// UserSchema.statics.findByToken = function (token) {
//   var User = this;
//   var decoded;
//   try {
//     decoded = jwt.verify(token, secret);
//   } catch (e) {
//     return Promise.reject();
//   }
//   return User.findOne({
//     _id: decoded._id
//   })
//     .then(user => {
//       if (!user) {
//         return Promise.reject();
//       } else {
//         return Promise.resolve(user);
//       }
//     })
//     .catch(e => {
//       res.status(401).end(e.message);
//     });
// };
//xx xx xx xx xx



// xx xxx xx xxx 
// var User = mongoose.model("User", UserSchema);
// module.exports = {
//   User
// };
//xx xxx xx xx xx




// xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx

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
    active: Boolean,
    role: {
      type: String,
      default: "student"
    }
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





var AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  country: String
});





var Student = mongoose.model("StudentSchema", StudentSchema);
module.exports = {
  Student
};