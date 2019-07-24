require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const groupController = require('./controllers/groupsController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const resetController = require('./controllers/resetController');
const postController = require('./controllers/postsController');
app.set('view engine', 'ejs');
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true})); // support url encoded bodies
app.use('/public', express.static('./public/'));

let PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/home', (req, res) => {
  res.render('pages/home');
});

app.get('/account', (req, res) => {
  res.send('User account accessed');
});

app.get('/signup', registerController.getRegistered);
app.post('/signup', registerController.registerUser);

app.get('/login', loginController.getLogin);
app.post('/login', loginController.userLogin);

app.get('/reset', resetController.resetPassword);

app.get('/posts', postController.getPosts);
app.post('/posts', postController.addPost);

app.get('/groups', groupController.getGroups);
app.post('/groups', groupController.addGroups);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
