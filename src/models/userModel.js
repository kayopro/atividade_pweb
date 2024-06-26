const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
username: {
type: String,
required: false,
unique: true
},
password: {
type: String,
required: false}
});

const User = mongoose.model('User', userSchema);
module.exports = User;