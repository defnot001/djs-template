const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

const projectPaths = {
  src: projectRoot,
  events: path.join(projectRoot, 'events'),
  commands: path.join(projectRoot, 'commands'),
};

module.exports = { projectPaths };
