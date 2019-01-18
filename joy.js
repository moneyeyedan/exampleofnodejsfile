var joi=require('joi');
//var username="manikandan@gmail.com";
var schema = joi.object().keys({
    username: joi.string().email({ minDomainAtoms: 2 })
})
joi.validate({ username }, schema, function (err, value) { 
    if(err===null){
        console.log("user name is correct");
    }else{
        
    }
    
});  // err === null -> valid