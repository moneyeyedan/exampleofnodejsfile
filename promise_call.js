var message = "";
promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        message+= "my";
    resolve(message);},2000)
})
promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        message+= "first";
        resolve(message);
    },2000)
})
promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        message += "solve";
        resolve(message);
    },2000)
})
promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        message += "problem";
        resolve(message);
    })
})
var printresult = (results) => 
{
    console.log("result=",results,"message",message);
}
function main(){
    Promise.all([promise1,promise2,promise3,promise4]).then(printresult);
    Promise.all([promise1,promise2,promise3,promise4]).then(printresult);
    console.log(message);
}
main();