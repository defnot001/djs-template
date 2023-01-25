import path from 'path';

const projectRoot = path.resolve(__dirname, '../');

export const projectPaths = {
  src: projectRoot,
  events: path.join(projectRoot, 'events'),
  commands: path.join(projectRoot, 'commands'),
};
