//pulling in mongoose
const { Schema, model, Types } = require('mongoose');

//creating schema for the User model
const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Email must match an email address!'],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// create the User model using the UserSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;