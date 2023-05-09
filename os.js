// imports :)
var os = require("os");

// functions
const dvcName = () => {
  return os.hostname();
};

const dvcNetwork = () => {
  return os.networkInterfaces();
};

const dvcMachine = () => {
  return os.machine();
};

const dvcCores = () => {
  return os.availableParallelism();
};

const dvcFreeMem = () => {
  return os.freemem();
};

const dvcTotalMem = () => {
  return os.totalmem();
};

const dvcUsedMem = () => {
  return dvcTotalMem() - dvcFreeMem();
};

const dvcPlatform = () => {
  return os.platform();
};

const dvcType = () => {
  return os.type();
};

// function calls:
console.log("");
//

console.log(`Name: ${dvcName()}`);
console.log(`Architecture: ${dvcType()} ${dvcPlatform()} ${dvcMachine()}`);
console.log(`Cores: ${dvcCores()}`);
// console.log(dvcNetwork());
console.log(`Total Memory: ${dvcTotalMem()} bytes`);
console.log(`Free Memory: ${dvcFreeMem()} bytes`);
console.log(`Used Memory: ${dvcUsedMem()} bytes`);

//
console.log("");
