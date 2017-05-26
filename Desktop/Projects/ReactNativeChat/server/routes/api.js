const express = require('express');
const router = express.Router();
const User = require('../modules/users');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jwt-simple');
const passport = require('passport');

router.get('/signUp', (req, res, next) => {
  res.send('register')
});

router.post('/signUp', (req, res, next) => {

  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password must have minimum 6 charts').isLength(6, 20);

  const errors = req.validationErrors();

  if(errors) {
    res.send(errors)
  } else {
    User.create(req.body)
    .then((user) => {
      res.send(user)
    })
    .catch(next)
  }
});

router.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then((user) => {
    res.send(user);
  })
});

router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id })
  .then((user) => {
    res.send(user);
  })
});

router.post('/signIn', passport.authenticate('local'),
  (req, res) => {
    res.send({ msg: 'success' })
  }
)

module.exports = router;