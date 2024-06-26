const userModel = require('../models/userModel');

const createUser = async (userData) => {
const user = new userModel(userData);
await user.save();
return user;
};


const getAllUser = async () => {
return await userModel.find();
};

// Pegar usuário específico para depois ser comparado na app.js
const getByUserName = async (username) => {
  return await userModel.findOne({username}); 
  };

module.exports = {
createUser,
getAllUser,
getByUserName
};