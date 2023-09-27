import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // For security reasons i putted a boolean to make employees, to activate you have to go in the database and change the default for true.
    isEmployee: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // to activate the colums createdAt e updatedAt for better tracking data
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;