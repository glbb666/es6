function  flat(arr){
    return arr.reduce(function(pre,cur){
        return pre.concat((Array.isArray(cur))?flat(cur):cur);
    },[])
}
console.log(flat([1,2,[4,[5]]]))
console.log([].concat(...[1,2,[4,[5]]]))