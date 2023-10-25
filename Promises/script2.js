const skippedLegDay=false;
const itLegDay=true ;


function GoGymPromise(){
    return new Promise((resolve , reject)=>{
        if (skippedLegDay){
            reject({
                name:'not a gymrat!',
                message: ':('
        })
        }else if (itLegDay){
            reject({
                name: 'You are a gymrat',
                message: '<3'
            })
        }else {
            resolve('Let go gym together :))');
        }
    })
}

GoGymPromise().then((message)=>{
    console.log('Success: '+message);
}).catch ((error)=>{
    console.log(error.name+ ' ' +error.message);
})

