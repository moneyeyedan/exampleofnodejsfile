var Promise = require('promise');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
var request=require('request');

var promise = new Promise(function (resolve, reject) {
 request('http://www.facebook.com', function (err,res,body) {
    if (err) reject(err);
    else resolve(res);
  });
});
promise.then(function(result){
    console.log(result);
})