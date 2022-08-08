const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: [true, 'this email already exists, please choose another one']
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJson: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;

        return ret;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;

        return ret;
      },
    },
  }
);

module.exports = mongoose.model("User", userSchema);
