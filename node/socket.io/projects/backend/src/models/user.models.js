import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],  
   tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],

  extensions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Extension',
    },
  ],
});

export const User = mongoose.model('User', userSchema);