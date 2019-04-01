var traceur = require('traceur');
var fs = require('fs');

// 将 ES6 脚本转为字符串
var contents = fs.readFileSync('hello.js').toString();

var result = traceur.compile(contents, {
  filename: 'hello.js',
  sourceMap: true,
  // 其他设置
  modules: 'commonjs'
});

if (result.error)
  throw result.error;
console.log(result)
// result 对象的 js 属性就是转换后的 ES5 代码
fs.writeFileSync('hello_es5.js', result.js);
// sourceMap 属性对应 map 文件
fs.writeFileSync('hello_es5.js.map', result.sourceMap);