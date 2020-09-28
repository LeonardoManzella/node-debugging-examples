const logger = require("../loaders/logger");

const chromeDevToolsError = () => {
  console.log(`Called chromeDevToolsError function`);
  const FLAG = false;
  console.log(`Flag set to ${FLAG}`);
  return FLAG
    ? "Backend is working correctly"
    : "There is a logic error in the endpoint. This message shouldn't appear";
};

const ndbError = () => {
  throw Error("This line shouldn't exist");
  //Note that this error is impossible to detect using the web version of Chrome Dev Tols and very difficult to find using the console
  return "Backend is working correctly";
};

module.exports = {
  chromeDevToolsError,
  ndbError,
};
