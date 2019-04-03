let {log} = console;
// log("\u0061")
// log("\u20BB7")//\u20BB+7
// log("\u{20BB7}")//"𠮷"
let hello = 123;

'\u{1F680}' === '\uD83D\uDE80'
let s = '𠮷a';
for(let ch of s){
    //for...of循环，因为它会正确识别 32 位的 UTF-16 字符
    //每个字符的0号位置,获取他们16进制的值
    log(ch.codePointAt(0).toString(16));
}
function is32Bit(ch){
    log(ch.codePointAt(0)>0xFFFF);
}
is32Bit(s);
log(`     
ok${s}       
dsdsad

`)
log("\na".trim())
// 大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。
log({name:'gl'}.toString())//[object Object]
log(`${{name:'gl'}}`)//[object Object]
//嵌套
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
const tmp1 = addrs => `
    <table>
        ${addrs.map(addr=>`
            <tr><td>${addr.first}</td></tr>
            <tr><td>${addr.last}</td></tr>
        `).join('')
        //.join是为了去掉两个数组中间的,
        }
    </table>
`;
log(tmp1(data));

