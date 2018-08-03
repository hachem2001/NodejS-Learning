const fs = require('fs');
var _ = function(){};

fs.unlink('./savedir/writeme.txt', function(){
  fs.rmdirSync('savedir');
});
