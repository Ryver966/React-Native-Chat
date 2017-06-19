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

router.post('/users/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    console.log(req.body)

    req.checkBody('email', 'Email is not valid.').isEmail();

    const errors = req.validationErrors();

    if(errors) {
      res.send(errors)
    } else {
      User.findOne({ where: { username: req.body.username } })
      .then((checkUserName) => {
        if(!checkUserName || checkUserName.id === req.params.id) {
          User.findOne({ where: { email: req.body.email } })
          .then((checkUserEmail) => {
            if(!checkUserEmail || checkUserEmail.id === req.params.id) {
              user.updateAttributes({
                email: req.body.email,
                username: req.body.username,
                avatar: req.body.avatar
              })
              .then(() => {
                res.send({ msg: 'success' })
              })
              .catch((err) => console.log(err))
            } else {
              res.send({ msg: 'User with this email does exist.' })
            }
          })
          .catch((err) => console.log(err))
        } else {
          res.send({ msg: 'User with this name does exist.' })
        }
      })
    }
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
    console.log(user)
    res.send({
      email: user.email,
      username: user.username,
      id: user.id,
      avatar: user.avatar
    });
  })
});

router.post('/changePassword/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    if(req.body.oldPwd === user.password) {
      req.checkBody('password', 'Password must have minimum 6 charts').isLength(6, 20);

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

router.post('/newThread', (req, res, next) => {
  Thread.findOne({ where: { 
    firstUserId: req.body.firstId,
    secondUserId: req.body.secondId 
  } })
  .then((thread) => {
    if(!thread) {
      Thread.findOne({ where: { 
        firstUserId: req.body.secondId,
        secondUserId: req.body.firstId
      } })
      .then((secondThread) => {
        if(!secondThread) {
          Thread.create({
            firstUserId: req.body.firstId,
            secondUserId: req.body.secondId
          }).then(() => {
            res.send({ msg: 'Success!' })
          })
        } else {
          res.send({ msg: 'This thread exist.' })
        }
      })
    } else {
      res.send({ msg: 'This thread exist.' })
    }
  })
});

router.get('/getFriends/:id', (req, res, next) => {
  const friends = [];
  Friendship.findAll({ where: { firstUserId: req.params.id } })
  .then((friendships1) => {
    friendships1.map(friendship => 
      User.findOne({ where: { id: friendship.secondUserId } })
      .then((user) => {
        friends.push(user)
      })
    )
      Friendship.findAll({ where: { secondUserId: req.params.id } })
      .then((friendships2) => {
        friendships2.map((friendship => 
          User.findOne({ where: { id: friendship.firstUserId } })
          .then((user) => {
            friends.push(user)
          })
        ))
        res.send(friends)
     })
  })
  .catch((err) => console.log(err))
})

router.post('/onlineStatus/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    user.updateAttributes({ onlineStatus: !user.onlineStatus })
    res.send({ msg: 'Status changed.' })
  })
  .catch((err) => console.log(err))
});

module.exports = router;