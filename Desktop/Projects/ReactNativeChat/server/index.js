const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');
const cons = require('consolidate');
const pg = require('pg');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/users');

const app = express();

const connect = 'postgres://piotrgorski:1234@localhost:5432/ChatApp';

pg.connect(connect, (err, client) => {
  if(err) {
    console.error(err);
    process.exit(1);
  }
  client.end();
})

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

app.listen(4050, () => {
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
    User.findOne({ where: { email: username } }).then((user) => {
      console.log(username)
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