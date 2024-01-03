const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['heaven'],
  maxAge: 1 * 60 * 60 * 1000, // in session for only 1 hour
}));

// In-memory user database
const users = [];

app.use(express.json()); 

// Signup API
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (users.find(user => user.username === username)) {
    return res.status(409).send('Username already taken');
  }

  const newUser = {
    username,
    password,
  };

  users.push(newUser);
  req.session.user = { userId: username };

  res.send('Signup successful!');
});

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    req.session.user = { userId: username };

    res.send('Logged in successfully!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.post('/logout', (req, res) => {
    req.session = null;
  
    res.send('Logged out successfully!');
  });


app.get('/', (req, res) => {
  const user = req.session.user;

  if (user) {
    res.send(`hey ${user.userId} you are logged in`);
  } else {
    res.status(401).send('sorry you are not logged in');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
