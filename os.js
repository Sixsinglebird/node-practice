////////////////////////////////////////////////
// imports
var os = require("os");
// OS -- provides operating system related utilities

////////////////////////////////////////////////

// functions
const dvcName = () => {
  // returns the name of the device
  return os.hostname();
};

const dvcNetwork = () => {
  // returns a list of the devices network interfaces (w/ drivers... i think... anything w/out drivers is ignored).
  return os.networkInterfaces();
};

const dvcMachine = () => {
  // returns the current machine type of the device
  return os.machine();
};

const dvcCores = () => {
  // returns the number of cores on the device
  return os.availableParallelism();
};

const dvcFreeMem = () => {
  // returns the amount of free memory on device
  return os.freemem();
};

const dvcTotalMem = () => {
  // returns the amount of total memory on device
  return os.totalmem();
};

const dvcUsedMem = () => {
  // returns the amount of used memory on the device
  return dvcTotalMem() - dvcFreeMem();
};

const dvcPlatform = () => {
  // returns the os for which the binaries are compiled
  return os.platform();
};

const dvcType = () => {
  // returns the os of the device
  return os.type();
};

////////////////////////////////////////////////
// function calls:
console.log("");
console.log(`Name: ${dvcName()}`);
console.log(`Architecture: ${dvcType()} ${dvcPlatform()} ${dvcMachine()}`);
console.log(`Cores: ${dvcCores()}`);
console.log(`Total Memory: ${dvcTotalMem()} bytes`);
console.log(`Free Memory: ${dvcFreeMem()} bytes`);
console.log(`Used Memory: ${dvcUsedMem()} bytes`);
console.log("");
////////////////////////////////////////////////
