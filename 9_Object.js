const proto = {
    foo:'hello'
};
const a ={

}
const obj = {
    foo:'world',
    find(){
        // return super.foo;
        console.log(super.foo)
    }
}
//设置proto为obj的原型,如果obj的原型没有foo属性，那么将顺着原型链往上找，直到找到有foo属性的对象，把值输出
Object.setPrototypeOf(obj,a);
Object.setPrototypeOf(a,proto)
obj.find()