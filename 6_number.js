// Number.isFinite()和Number.isNaN()两个方法与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
// Number.EPSILON === Math.pow(2, -52) 极小的常量
Number.isSafeInteger(9007199254740993 - 990)
console.log(9007199254740993 - 990)// 9007199254740002
console.log(9007199254740994 - 990)//9007199254740003
