var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// Specify public folder
app.use(express.static('public'));

// Start app
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT)
});
