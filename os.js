////////////////////////////////////////////////
// imports
var os = require("os");
// OS -- provides operating system related utilities

////////////////////////////////////////////////
// functions

// returns the name of the device
const dvcName = () => {
  return os.hostname();
};
// returns the current machine type of the device
const dvcMachine = () => {
  return os.machine();
};
// returns the number of cores on the device
const dvcCores = () => {
  return os.availableParallelism();
};
// returns the amount of free memory on device
const dvcFreeMem = () => {
  return os.freemem();
};
// returns the amount of total memory on device
const dvcTotalMem = () => {
  return os.totalmem();
};
// returns the amount of used memory on the device
const dvcUsedMem = () => {
  return dvcTotalMem() - dvcFreeMem();
};

// returns the os for which the binaries are compiled
const dvcPlatform = () => {
  return os.platform();
};
// returns the os of the device
const dvcType = () => {
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
