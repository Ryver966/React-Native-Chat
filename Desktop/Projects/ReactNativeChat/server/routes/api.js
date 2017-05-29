const express = require('express');
const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jwt-simple');
const passport = require('passport');

const User = require('../models/users');
const Thread = require('../models/thread');
const Friendship = require('../models/friendship');

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
);

router.post('/thread', (req,res, next) => {
  Thread.create(req.body)
  .then((thread) => {
    res.send(thread)
  })
  .catch(next)
});

router.get('/thread/:id', (req, res, next) => {
  Thread.findById({ _id: req.params.id })
  .then((thread) => {
    res.json(thread)
  })
});

router.put('/thread/:id', (req, res, next) => {
  Thread.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then((thread) => {
    res.send(thread)
  })
});

router.delete('/friendships/:id', (req, res, next) => {
  Friendship.findByIdAndRemove({ _id: req.params.id })
  .then((user) => {
    res.send(user);
  })
});

module.exports = router;