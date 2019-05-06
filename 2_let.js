// //1et和var的区别？
// //1.let所声明的变量，只在let命令所在的代码块有效
// {
//     let a = 1;
//     var b = 2;
// }
// // console.log(a)//a is not defined
// console.log(b)//2
// //2.在for循环内部的区别
// var a = []
// var b = []
// for(var i = 0;i<10;i++){
//     a[i] = function(){
//         console.log(i);
//     }
// }
// for(let j = 0;j<10;j++){
//     b[j] = function(){
//         console.log(j);
//     }
// }
// a[5]();//10
// b[5]();//5
// //原因:var的i是全局的i，let的j是局部的j
// //3.for循环的特别之处:设置循环变量的部分是父作用域，循环体内部是子作用域
// for(let i = 0;i<3;i++){
//     let i = 'a'
//     console.log(i);
// }
// //4.不存在变量提升，先声明后使用
// console.log(foo);//undefined,变量提升了所以不报错，但是初始化不能提升
// var foo = 2;

// // console.log(bar);//报错ReferenceError
// let bar = 2;
// //5.暂时性死区:只要块级作用域内存在let/const命令，它所声明的变量就绑定这个区域，不再受外部的影响
// var tmp = 123;
// if(true){
//     // tmp = 'ac';  
//     let tmp;
//     //在声明变量tmp之前，都属于变量tmp的死区
//     tmp = 'ac';
//     console.log(tmp);
// }
// function bars(x = 2,y = x){
//     return [x,y];
// }
// bars();
// function bars2(x = y,y = 2){
//     return [x,y];
// }
// bars2();
// //报错，因为y没有声明就直接用了
// const name ;
// { let num = 2;var num = 2;}
// function fn(){
// 	if(false){
// 	    let a = 1;
// 	}else{
// 		console.log(a)//undeined
// 	}
// }
// fn();
// var a  =1;
// {
//     console.log(a)
//     let a; 
// }
// function fn(){
// 	var  a = 1;
// }
// fn()
// console.log(a)

// {
//     let a = 1
// }

// console.log(a)

// {
//     var  a = 1;

// }
// console.log(a)

// {
//     const  a = 1;

// }
// console.log(a)


//函数也算块级作用域
// function a(){
//     console.log(a);
//     let a = 1;
// }
// a()
// function a(i = 0){
//     var i = 1;
//     console.log(i);
// }
// a()
// function a(){
//     let i = 0;
//     var i = 1;
// }
// a()
// for(let i = 0;i<10;i++){
//     let i = 1;
//     console.log(i)
// }
// console.log(i)


// function bar(x = y, y = 2) {
//     let y = 1;
//     return [x, y];
// }
// bar()
// function fn(x = 1){
//     var x = 2;
//     console.log(x);
// }
// fn()
// console.log(a);
// function fn(){
//     var x = 1;
//     var x = 3;
//     var x = 2;
//     console.log(x)
// }
// fn()
// function fn(x = 1,x = 3){
//     var x = 2;
//     console.log(x);
// }
// fn()
// let a  = 2
// {
//     let a = 1;
//     console.log(a);
// }
// let a = 2;
// {
//     console.log(a);
//     var a = 1;
// }


// let a = 2;
// {
//     console.log(a);
//     let a = 1;
// }
// console.log(a);
// console.log(b);


// x = "global";
// // function scope:
// (function() {
//     console.log(x);
//     var x = 1;
// }());
// var  i =  1;
// console.log(window.i)
// var liList = document.getElementsByTagName('li');
// for (var i = 0; i < 10; i++) {
// 	~function(j){
// 		  liList[j].onclick = function(){
// 	    console.log(j)
// 	  }
// 	}(i)
// }