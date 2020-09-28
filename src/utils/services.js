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

const asynchronousError = () => {
  let internalFlag = false;
  setTimeout(() => {
    throw new Error("async error");
    //Note that this error is extremely difficult to find without race and clarify packages

    //Do some stuff.. then change a variable
    internalFlag = true;
  }, 0);
  return internalFlag
    ? "Backend is working correctly"
    : "Check the terminal, there is an async error to fix. Note that the server has crashed and you need to restart to retry again";
};

module.exports = {
  chromeDevToolsError,
  ndbError,
  asynchronousError,
};
