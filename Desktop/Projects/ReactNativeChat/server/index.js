const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/users');

const app = express();

mongoose.connect('mongodb://localhost/chatApp');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    }
  }
}))

app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, () => {
  console.log('now listening');
})

app.use(flash())

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})
app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  next();
})

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password !== user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
))

passport.serializeUser((user, done) => {
  console.log('serialize')
  return done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log('deSerialize')
  console.log('test');
  User.findById(id, (err, user) => {
    done(err, user);
  })
})