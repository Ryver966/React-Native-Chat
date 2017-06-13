const express = require('express');
const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jwt-simple');
const passport = require('passport');
const session = require('express-session');

const User = require('../models/users');
const Thread = require('../models/threads');
const Friendship = require('../models/friendships');

router.get('/users', (req, res, next) => {
  User.findAll().then((users) => res.send(users))
});

router.post('/signUp', (req, res, next) => {

  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password must have minimum 6 charts').isLength(6, 20);

  const errors = req.validationErrors();

  if(errors) {
    res.send(errors)
  } else {
    User.findOne({ where: { 
      email: req.body.email 
    } }).then((userByEmail) => {
      if(!userByEmail) {
        User.findOne({ where: {
          username: req.body.username
        } }).then((userByName) => {
          if(!userByName) {
            User.create(req.body)
            .then((user) => {
              res.json({ msg: 'success' })
            })
            .catch(next)
          } else {
            res.json({ msg: 'User with this name exist.' })
          }
        })
      } else {
        res.json({ msg: 'User with this email exist.' })
      }
    })
  }
});

router.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then((user) => {
    res.json(user);
  })
});

router.post('/signIn', passport.authenticate('local'),
  (req, res) => {
    res.json(req.user.id)
  }
);

router.get('/validUser/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    res.send({
      email: user.email,
      username: user.username,
      id: user.id
    });
  })
});

router.post('/changePassword/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    if(req.body.oldPwd === user.password) {
      user.updateAttributes({
        password: req.body.newPwd
      })
      res.send({ msg: 'success' })
    } else {
      res.send({ msg: 'Old password does not match.' })
    }
  })
});

router.post('/newFriendship', (req, res, next) => {
  Friendship.create({
    firstUserId: req.body.firstId,
    secondUserId: req.body.secondId
  })
})

module.exports = router;