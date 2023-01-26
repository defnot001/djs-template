import dotenv from 'dotenv';

dotenv.config();

const envVariables = {
  botToken: process.env.BOT_TOKEN,
  clientID: process.env.CLIENT_ID,
  guildID: process.env.GUILD_ID,
};

function hasAllProperties(obj) {
  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      throw new Error(`Object is missing property: ${key}`);
    }
  }
  return obj;
}

export const config = hasAllProperties(envVariables);
