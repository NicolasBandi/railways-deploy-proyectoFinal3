import mongoose, { Schema } from 'mongoose'

const user = new Schema({
  email: { type: String, require: true, unique: true, index: true, validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ },
  password: { type: String, require: true },
  fullname: { type: String, require: true },
  tel: { type: Number, require: true },
}, { timestamps: true })

export default mongoose.model('Usuario', user)