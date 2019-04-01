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
//3.for循环的特别之处:设置循环变量的部分是父作用域，循环体内部是子作用域
for(let i = 0;i<3;i++){
    let i = 'a'
    console.log(i);
}
//4.不存在变量提升，先声明后使用
console.log(foo);//undefined,变量提升了所以不报错，但是初始化不能提升
var foo = 2;

// console.log(bar);//报错ReferenceError
let bar = 2;
//5.暂时性死区:只要块级作用域内存在let/const命令，它所声明的变量就绑定这个区域，不再受外部的影响
var tmp = 123;
if(true){
    // tmp = 'ac';  
    let tmp;
    //在声明变量tmp之前，都属于变量tmp的死区
    tmp = 'ac';
    console.log(tmp);
}
function bars(x = 2,y = x){
    return [x,y];
}
bars();
function bars2(x = y,y = 2){
    return [x,y];
}
bars2();
//报错，因为y没有声明就直接用了