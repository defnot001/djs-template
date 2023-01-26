require('dotenv').config();

const envVariables = {
  botToken: process.env['BOT_TOKEN'],
  guildID: process.env['GUILD_ID'],
  clientID: process.env['CLIENT_ID'],
};

function hasAllProperties(obj) {
  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      throw new Error(`Object is missing property: ${key}`);
    }
  }
  return obj;
}

const config = hasAllProperties(envVariables);

module.exports = { config };
