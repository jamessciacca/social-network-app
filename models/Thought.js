//pulling in mongoose and moment
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

//pulling in the reaction schema
const ReactionSchema = require('./Reaction');

//creating the schema for the Thought model
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: 'A thought is required',
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [ReactionSchema],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

// get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;