const passport = require('passport');

const authHandler = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) return res.status(401).json({ error: 'Unauthorized' });
      if (!user) return res.status(401).json({ error: 'Unauthorized' });
      req.user = user;
      next();
    })(req, res, next);
  };
  

module.exports = authHandler;
