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
