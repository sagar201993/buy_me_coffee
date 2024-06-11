import { Schema, models, model } from "mongoose";

type ProfileInfo = {
  username: string;
  displayName: string;
  avatarUrl: string;
  coverUrl: string;
};
const profileInfoSchema = new Schema<ProfileInfo>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    displayName: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
    coverUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

export const ProfileInfoModel =
  models?.ProfileInfo || model<ProfileInfo>("ProfileInfo", profileInfoSchema);
