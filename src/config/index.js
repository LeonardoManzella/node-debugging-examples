const appRoot = require("app-root-path");
const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// Set the NODE_ENV to 'development' By default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  /**
   * Port application
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * Used by winston logger
   */
  logs: {
    file: {
      level: process.env.LOG_LEVEL,
      filename: process.env.LOG_PATH,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: process.env.LOG_LEVEL,
      handleExceptions: true,
      json: false,
      colorize: true,
    },
    level: process.env.LOG_LEVEL,
  },

  /**
   * API configs
   */
  api: {
    prefix: "",
  },

};
