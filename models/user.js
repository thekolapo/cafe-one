const mongoose = require('mongoose');
const { SchemaTypes } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    email_address: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    full_name: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone_number: { type: SchemaTypes.String, required: true },
    recieve_emails: { type: SchemaTypes.Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('User', UserSchema);
