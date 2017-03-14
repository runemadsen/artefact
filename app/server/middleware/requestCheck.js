import _ from 'lodash';

export default function() {

  return function(req, res, next) {

    // always add user to view variables
    if(req.user) {
      res.locals.user = req.user;
    }

    // Check accept header and set req.params.format to json
    // This allows people to use .json in URL or Accept header
    var accept = req.get('Accept');
    if(accept == 'application/json' || req.params.format == 'json') {
      res.locals.useJSON = true;
    }

    next();
  }

}
