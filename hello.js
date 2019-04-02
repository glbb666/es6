// function bar(x = y,y = 2) {
//     console.log(arguments)
//     return [x, y];
//   }
// //   bar(); // 报错
//   bar(1,2);

var constantize = obj=>{
    Object.freeze(obj);
    Object.keys(obj).forEach((key,i)=>{
        if(typeof obj[key] === 'object'){
            constantize(obj[key]);
        }
    })
}