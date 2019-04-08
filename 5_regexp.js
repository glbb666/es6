// 正确返回字符串长度的函数
function codePointLength(text){
    let result = text.match(/\s\S/gu)
    return result?result.length:0;
}
var s = '𠮷𠮷';
// 单单一个y修饰符对match方法，只能返回第一个匹配，必须与g修饰符联用，才能返回所有匹配。

// ES5 的 source 属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6 的 flags 属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'

//[^]任意非空,可以匹配\n


