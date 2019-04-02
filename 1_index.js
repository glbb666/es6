//@babel/register 模块改写require明令，先为他加上一个钩子，此后，每当使用require记载.js、.jsx、.es、.es6后缀名的文件，都会用Babel进行转码
//使用前，必须首先加载@babel/register-
require('@babel/register');
require('./hello.js');