let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4
// let [a, b, d] = [1, [2, 3], 4];
// a // 1
// b //  [2, 3]
// d // 4
// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
var {x: y = 3} = {x: 5};
// y // 5
// 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
function v(url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
    // ... more config
  }={}) {
    console.log(async);
    console.log(complete);
  };
 v('sdads',{}); 