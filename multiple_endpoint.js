var request = require('request');
var bodyparser=require('body-parser');
var html2json = require('html2json').html2json;
var express=require('express');
var app=express();
app.use(bodyparser.json());
promise1 = new Promise((resolve,reject)=>{

    var options = {
        url: 'https://api.github.com/users/moneyeyedan',
        headers: {
            'User-Agent': 'request'
        }
    };
    request(options,function(error,response,body){
       if(error) reject(error);
       resolve(body);
    
    })
})
promise2=new Promise((resolve,reject)=>{
    var option1={
        url:"https://api.github.com/users/narenaryan",
        headers:{
            'User-Agent': 'request'
        }
    }
    request(option1,function(error,response,body){
        if(error) reject(error);
        resolve(body);
    })
})
var call=(result)=>{
    console.log(result.login);
}
Promise.all([promise1,promise2]).then(call);
