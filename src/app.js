const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userRouter =  require('./routers/userRouter');
const userService =  require('./services/userService');
const port = 3000;

const app = express();
app.use(express.json());

const SECRET_KEY = 'your_secret_key';

// o usuário passa o username e a senha
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // pegamos o usuário do banco 
  const user = await userService.getByUserName(username);

  // Verifica se o usuário existe
  if (!user) {
      return res.status(401).send('Invalid username or password');
  }

  // Verifica a senha que o usuário passou com a senha do banco
  const validPassword = user.password == password;
  if (!validPassword) {
      return res.status(401).send('Invalid username or password');
  }

  // Gera um token JWT
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: 30000 });
  res.json({ token });
});

app.use((req, res, next)=>{
  const token = req.body.token;

  if(!token){
    return res.status(401).send('Token not found');
  }
  jwt.verify(token, SECRET_KEY, function(err, decoded) {
    if(err){
      return res.status(401).send('Invalid Token');
    }
    next();
  });

});



const PORT=3000;
const AAP_NAME='padimFood';
const PASSWORD='bdPadimUFCA';
const CLUSTER_NAME='padimfood';

mongoose.connect(`mongodb+srv://padim:${PASSWORD}@${CLUSTER_NAME}.0umakns.mongodb.net`,{
  retryWrites: true, 
  w: 'majority', 
  appName: AAP_NAME
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro de conexão com o MongoDB', err);
});;

app.use('/api', userRouter);

app.listen(port, ()=>{
  console.log(`Servidor iniciado na porta ${PORT}`);
});

