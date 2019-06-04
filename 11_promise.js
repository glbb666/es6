// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve('ok'), 3000)
//   })
  
//   const p2 = new Promise(function (resolve, reject) {
//     //   resolve(p1);
//         resolve(1);
//   })
  
//   p2
//     .then((value)=> value)
//     .then(result => console.log(result))  
// const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
//   console.log(1);
//   return id+1;
// });

// Promise.all(promises).then(function (posts) {
//   console.log(2)
//   console.log(posts)
// }).catch(function(reason){
//   // ...
// });
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })
 
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => {
// console.log("成功");
// console.log("p2:",p2);
// console.log("p1:",result)})
//   .catch(error =>{ 
// console.log("失败");
// console.log("p2",p2);
// console.log("p1",p1);
// });
// var obj = 'kk'
// var a = Promise.resolve(obj);
// console.log(a);
// var obj  = {name:'kk'}
// obj.then = function(resolve){
//   console.log(a);
//   //resolve();
//   console.log(a);
// }
// const a = Promise.resolve(obj);
// a.then(()=>{
//   console.log('ok');
//   console.log(a);
// })
// const promise = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     console.log("resolve还没开始:",promise);
//   }, 5000)
//   setTimeout(() => {
//     resolve('ok');
//     console.log("resolve刚刚结束:",promise);
//   }, 6000)
// });//ok
// promise.then(result=>{
//   console.log(result)
// });
let thenable = {
  then: function(resolve, reject) {
    console.log(p1);
    setTimeout(()=>{
      resolve(42);
      console.log(p1);
    },6000)
  }
};
let p1 = Promise.resolve(thenable);

// p1.then(function(value) {
//   console.log(value);  // 42
// });


