new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("My First Function")
        resolve("My data");
    },3000)
   
}).then(data=>{
    console.log(data);
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("My second Function")
            resolve("My data is second");
        },3000)
       
    })
   
}).then(data=>{
    console.log("i am single");
})