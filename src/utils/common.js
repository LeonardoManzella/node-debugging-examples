const logger = require("../loaders/logger");
const { CodeError } = require("./ApplicationError");

const handleError = (err, data) => {
  let msj = JSON.stringify(err);
  if (msj.includes("code 500")) {
    throw new CodeError("An error occurred in the bank server", 502, data);
  } else if (msj.includes("code 400")) {
    throw new CodeError("Invalid input data on the bank server", 502, data);
  } else if (msj.includes("code 404")) {
    throw new CodeError(
      "The endpoint was not found on the bank server",
      504,
      data
    );
  } else {
    throw new CodeError("Banking service not available", 504, data);
  }
};

module.exports = {
  handleError,
};
