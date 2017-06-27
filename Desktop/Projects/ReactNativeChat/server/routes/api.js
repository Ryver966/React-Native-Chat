const express = require('express');
const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jwt-simple');
const passport = require('passport');
const session = require('express-session');

const User = require('../models/users');
const Thread = require('../models/threads');
const Friendship = require('../models/friendships');
const Message = require('../models/messages');

router.get('/users', (req, res, next) => {
  User.findAll({ where: req.query, include: [{ all: true }] }).then((users) => res.send(users))
});
router.get('/msgss', (req, res, next) => {
  Message.findAll({ where: req.query, include: [{ all: true }] }).then((users) => res.send(users))
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
              res.send({ msg: 'success' })
            })
            .catch(next)
          } else {
            res.send({ msg: 'User with this name exist.' })
          }
        })
      } else {
        res.send({ msg: 'User with this email exist.' })
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
        console.log(checkUserName)
        if(checkUserName == null || req.params.id == checkUserName.id) {
          User.findOne({ where: { email: req.body.email } })
          .then((checkUserEmail) => {
            if(checkUserEmail == null|| req.params.id == checkUserEmail.id) {
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
  User.findOne({ where: 
    { id: req.params.id }, 
    include: [{ all: true }] 
  })
  .then((user) => {
    res.send({
      email: user.email,
      username: user.username,
      id: user.id,
      avatar: user.avatar,
      friends: user.friends
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

router.get('/getThreadMessages/:id', (req, res, next) => {
  Message.findAll({ where: { threadId: req.params.id }, include: [{ all: true }] })
  .then((messages) => {
    res.send(messages)
    })
  })

router.post('/onlineStatus/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    user.updateAttributes({ onlineStatus: !user.onlineStatus })
    res.send({ msg: 'Status changed.' })
  })
  .catch((err) => console.log(err))
});

router.put('/userFriendship/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    user.addFriend(req.body.friendId)
  })
});

router.post('/thread/:id/newMsg', (req, res, next) => {
  Message.create({
    msg: req.body.msg,
    authorId: req.body.author
  })
  .then((message) => {
    Thread.findOne({ where: { id: req.params.id } })
    .then((thread) => {
      thread.addMessage(message)
    })
  })
});

router.put('/thread', (req, res, next) => {
  Thread.findOrCreate({
    where: { chatters: { $contains: [req.body.firstName, req.body.secondName] } },
    include: [{ all: true }],
    defaults: { chatters: [req.body.firstName, req.body.secondName] }
 })
  .spread((thread, createdThread) => {
    res.send(thread)
  })
});

router.get('/getUserThreads/:name', (req, res, next) => {
  Thread.findAll({ 
    where: { chatters: { $contains: [req.params.name] } },
    include: [{ all: true }]
 })
  .then((threads) => {
    res.send(threads)
  })
});

router.put('/messageAuthorAvatar', (req, res, next) => {
  User.findOne({ where: { username: req.body.userName } })
  .then((user) => {
    res.send({ avatar: user.avatar })
  })
});

router.get('/test/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    console.log(user)
    const result = user.getFriends();
    res.send(result)
  })
})

module.exports = router;