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
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
 
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => {
console.log("成功");
console.log("p2:",p2);
console.log("p1:",result)})
  .catch(error =>{ 
console.log("失败");
console.log("p2",p2);
console.log("p1",p1);
});