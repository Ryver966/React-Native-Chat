const express = require('express');
const router = express.Router();
const User = require('../modules/users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jwt-simple');

router.get('/users', (req, res, next) => {
  res.send({ name: 'Abdul' })
});

router.post('/users', (req, res, next) => {
  User.create(req.body)
  .then((user) => {
    res.send(user);
  })
  .catch(next)
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

router.post('/signIn', (req, res, next) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if(err) throw err;

    if(!user) {
      return res.status(403).send({ success: false, msg: 'Auth failed' })
    } else {
      if(user.password === req.body.password) {
        console.log(user)
        res.json({ success: true, msg: 'Auth success.' });
      } else {
        return res.status(403).send({ success: false, msg: 'Auth failed. Wrong Password.' })
      }
    }
  })
})

passport.use(new LocalStrategy(
  (_email, _password, done) => {
    User.findOne({ email: _email }, (err,user) => {
      if(err){
        return done(err);
      }
      if(!user) {
        return done(null,false, { message: 'Incorrect user email.' });
      }
      if(!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
  }
));

module.exports = router;