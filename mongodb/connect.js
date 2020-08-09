const mongoose = require('mongoose');
const config = require("config");

mongoose.connect(`mongodb+srv://revitalt:${config.get("mongoPass")}@cluster0-2b8gk.gcp.mongodb.net/toy_store?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected")
});

module.exports = db;