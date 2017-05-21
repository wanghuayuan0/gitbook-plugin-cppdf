const exec = require('child_process').exec;

module.exports = {
    hooks: {
    // For all the hooks, this represent the current generator

    // This is called before the book is generated
    "init": function() {
    },

    // This is called after the book generation
    "finish": function() {
      var cmd = 'cp -r pdf _book/';
      console.log(cmd);

      exec(cmd, function(error, stdout, stderr){
        if (error) {
            console.log(error);
            return;
        }
      })
    }
  }
};