//pulling in mongoose
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

//connecting to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//exporting the connection
module.exports = mongoose.connection;