const mongoose = require('mongoose');

// Schemas define the shape of the documents within the collection.
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, unique: true, },
  email: {string, required:true, unique:true, validate: [validateEmail, 'Please fill a valid email address'] },
  thoughts: { type: Schema.Types.ObjectId, ref: 'User'  },
  friends: { type: Schema.Types.ObjectId, ref: 'User'}
  
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

usersSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});


const User = model('User', usersSchema);


module.exports = User;