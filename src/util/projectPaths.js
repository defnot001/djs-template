import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const projectPaths = {
  src: path.join(__dirname, '../'),
  events: path.join(__dirname, '../events'),
  commands: path.join(__dirname, '../commands'),
};
