var lodash=require('lodash');
//import './node_modules/lodash/upperCase';
//var uppercase=require('upperCase');
var a=lodash.compact([0, 1, false, 2, '', 3]);
console.log(a);
var r = lodash.random(10);
console.log(r);

r = lodash.random(5, 10);
console.log(r);
var a='manikandan';
console.log(lodash.toUpper(a));