import User from '../models/user'

export function UsersSignUp(req, res) {

  User.create(req.body.user, function(e, user) {
    if(e) {
      // Send error back to client
    }
    req.login(user, function(e) {
      if(e) {
        // Send error back to client
      }
      return res.status(201).json({message: "User created"});
    });
  });

}

export function UsersSignIn(req, res) {
  // Authentication happens in the passport.authenticate middleware handler
  // set up in server.js
  return res.status(200).json({message: "User logged in"});
}

export function UsersSignOut(req, res) {
  req.logout();
  return res.status(200).json({message: "User logged out"});
}
