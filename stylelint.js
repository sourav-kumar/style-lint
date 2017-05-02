var stylelint = require('stylelint');

stylelint.lint({
  files: "css/*.scss"
})
  .then(function(data) {
    console.log(data);
    // do things with data.output, data.errored,
    // and data.results
  })
  .catch(function(err) {
    // do things with err e.g.
    console.error(err.stack);
  });;