import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      required: true,
    },
    orders: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orders" }],
      default: [],
    },
    conversations: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Conversations" }],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
