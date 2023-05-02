//pulling in mongoose
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

//connecting to the database
mongoose.connect(`mongodb://127.0.0.1:270-17/social-network-api`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//exporting the connection
module.exports = mongoose.connection;