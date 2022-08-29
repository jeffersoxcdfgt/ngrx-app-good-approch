const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/api/ping', (req, res, next)  => {
  res.status(200).json('pong!');
});

app.post('/api/login', (req, res, next) => {
  if (req.body.email === 'admin@admin.com' && req.body.password === 'admin') {

     const payload = { check:  true };
     const token = jwt.sign(payload, '741258963', { expiresIn: 1440 });

     res.status(200).json({
      status: 'success',
      token: token
     });

  } else {
    res.status(400).json({
      status: 'error'
    });
  }
});

app.get('/api/status', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }
  // simulate token decoding
  const header = req.headers.authorization.split(' ');
  const token = header[1];
  if (token === '1234567') {
    res.status(200).json({
      status: 'success',
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});

app.listen(1337, () => {
  console.log('App listening on port 1337!');
});
