//creating the schema for the Reaction model
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        //creating custom id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
             maxlength: 300,
        },
        username: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
          },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );

    //exporting the Reaction model
    module.exports = ReactionSchema;
    