const jwt = require('jsonwebtoken')

module.exports = {
  
  login(req, res) {

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const {username, password} = Buffer.from(b64auth, 'base64').toString().split(':')

    // // Generate an access token
    const accessToken = jwt.sign({ username: username }, process.env.AUTH_TOKEN);

    res.json({
        accessToken
    });
    
  },

};