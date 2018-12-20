import mongoose from 'mongoose'
const { Schema } = mongoose

const Signup = new Schema(
    {
        full_name: { type: Schema.Types.String },
        email_address: {
            type: Schema.Types.String,
            required: true,
            unique: true
          },
        phone_number: { type: Schema.Types.String },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Signup', Signup)