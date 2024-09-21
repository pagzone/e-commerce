import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISession extends Document {
  _id: string;
  user_id: string;
  expires_at: Date;
}

const SessionSchema: Schema<ISession> = new Schema(
  {
    _id: {
      type: String,
      required: [true, 'Please provide an id'],
    },
    user_id: {
      type: String,
      required: [true, 'Please provide a user id'],
    },
    expires_at: {
      type: Date,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const Session: Model<ISession> =
  mongoose.models.Session || mongoose.model<ISession>('Session', SessionSchema);

export default Session;