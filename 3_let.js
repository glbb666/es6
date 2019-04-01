//1et和var的区别？
//1.let所声明的变量，只在let命令所在的代码块有效
{
    let a = 1;
    var b = 2;
}
// console.log(a)//a is not defined
console.log(b)//2
//2.在for循环内部的区别
var a = []
var b = []
for(var i = 0;i<10;i++){
    a[i] = function(){
        console.log(i);
    }
}
for(let j = 0;j<10;j++){
    b[j] = function(){
        console.log(j);
    }
}
a[5]();//10
b[5]();//5
//原因:var的i是全局的i，let的j是局部的j
//3.for循环的特别之处，