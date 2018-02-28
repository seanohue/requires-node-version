var semver = require('semver');
var chalk  = require('chalk');
var red    = chalk.red;
var bold   = chalk.bold;

module.exports = requiresNodeVersion;
requiresNodeVersion.between = between;

function logError() {
  console.log(red.apply(this, arguments));
}

function requiresNodeVersion(required, name) {
  if (semver.lt(process.version, required)) {
    name = name || 'This program';
    logError(name + ' requires Node ' + required + ' or higher.');
    logError('You are currently using Node ' + process.version + '.');
    process.exit(1)
  }
}

function between(first, second, name) {
  if (semver.gt(process.version, second)) {
    name = name || 'This program';
    logError(name + ' is deprecated after Node ' + second + ' or lower.');
    logError('You are currently using Node ' + process.version + '.');
    process.exit(1)
  }
  return requiresNodeVersion(first, name);
}
