var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

webdriverio
  .remote(options)
  .init()
  .url('https://www.google.com')
  .getTitle().then(function (title) {
    console.log('Title was: ' + title);
  })
  .catch(function(err){
    console.log(err);
  })
  .end();
