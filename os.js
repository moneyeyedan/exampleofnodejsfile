var os = require('os');
var eol=os.EOL;
var arch=os.arch();
var cons=os.constants.signals;
var cpu=os.cpus();
var endianness=os.endianness()
var freemem=os.freemem();
var homedir=os.homedir();
var host=os.hostname();
var loadavg=os.loadavg();
var networkinterface=os.networkInterfaces();
var platform=os.platform();
var release=os.release();
var totalmem=os.totalmem();
var type=os.type()
console.log(type);