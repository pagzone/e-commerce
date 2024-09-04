import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  name: string;
  hashedPassword: string;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    _id: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    username: {
      type: String,
      required: [true, 'Please provide a name'],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
    },
    hashedPassword: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    _id: false,
  }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;