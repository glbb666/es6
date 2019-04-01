//如果某些代码需要调用Babel的api进行转码，就要使用@babel/core模块
var babel = require('@babel/core');

// var es6 = 'let x = n => n + 1';
// //字符串转码
// var es5 = babel.transform(es6, {
//     presets: ['@babel/env'],
//     // ast:true,
//     // sourceMaps:true
//     retainLines:true
//   })
  
// console.log(es5);

//文件转码(异步)
babel.transformFile('hello.js',{
    presets:['@babel/env'],
    auxiliaryCommentAfter:'s',
    retainLines:true,
    ast:true
},function(err,result){
    // console.log(result);
    console.log(result.ast)
    console.log(result)
    // console.log(result.code);
})