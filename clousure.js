// const mynums=[1,2,3,4]
// const totalnums = mynums.reduce((acc,curr)=>{
//     console.log(` acc:-${acc} and curr:-${curr}`);
//     return acc+curr
// },0)

// console.log("totalnums",totalnums);

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const condition=true;
//     if(condition===true){
//         resolve({name:"anil",age:34,email:'anil@gmail.com'})
//     }else{
//         reject('this message is rejected.')
//     }
//     },3000)
// }).then((result)=>{
//     console.log("result",result);
// })
// const mypro=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"riky",age:23})
//     },1000)
// }).then((res)=>{
//     console.log("res",res);
// })
// const myprosecond=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"riky",age:23})
//     },2000)
// }).then((res)=>{
//     console.log("res",res);
// })
// fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//    return res.json()
// }).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log("error",error);
// }).finally(()=>{
//     console.log("data block is executed");
// })

// class user {
//     constructor(username, usercount, loggedin) {
//         this.username = username;
//         this.usercount = usercount;
//         this.loggedin = loggedin;
//         return this;
//     }
// }
// const userone= new user("hitesh",12,true)
// // const usertwo=user("riky",18,true)
// console.log("userone",userone);

function myfun(){
    // console.log("mydata",data);
    const inner="maitri"
    return this.inner
}
const myfunone=myfun()
// const myfuntwo=myfun("riky")
console.log("myfunone",myfunone);
