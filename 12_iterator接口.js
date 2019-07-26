// // let arr = ['a','b','c'];
// // let iter = arr[Symbol.iterator]();
// // console.log(iter.next());
// // console.log(iter.next())
// // for (var [key, value] of arr.entries()) {
// //     console.log(key + ' : ' + value);
// //   }
// var count = 0;
// function* f() {
//     count++;
//      console.log((count++)+'执行了！'+(yield 123))
//      console.log(count++,5643546);
//     yield 444 ,console.log(3) ;
//     yield 666 ,console.log(4) ;
//   }
  
//   var it = f();
//   var count = 0
//   for(let item of it){
//       console.log(item);
//   }
// // it.next()
// // it.next()
function* f() {
    for(var i = 0,count = 0; count<=2; i++,count++) {
        console.log('reset:'+reset);
        var reset = yield i;
        console.log(reset);
        console.log('before'+i);
        if(reset) { i = -1; }
        console.log('after'+i);
    }
}
var g = f();
console.log(g.next())
console.log(g.next()) 
// console.log(g.next(true))
// for(let item of g){
//     console.log(item);
// }
// console.log([...g])