let common = [
  '--require ./dist/config/config.js', 
  '--require ./dist/setup/assertions.js',
  '--require ./dist/setup/hooks.js' ,
  '--require ./dist/stepDefinitions/**/*.steps.js',
].join(' ');

module.exports = {
  default: common
};