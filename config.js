require("dotenv").config();

const { env } = process;

module.exports = {
  PORT: env.PORT,
  MONGO_URL: env.MONGO_URL,
  ADMIN_LOGIN: env.ADMIN_LOGIN,
  ADMIN_PASS: env.ADMIN_PASS,
  SECRET_WORD: env.SECRET_WORD,
};
