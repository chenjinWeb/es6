/**
 * Created by admin on 2018/4/23.
 */

//简写对象属性
let name="mcj";
const person = {
    name,
    age:20
}

console.info(person)   //{name:'mcj',age:20}

//简写对象的方法
const animal = {
    bite(){
        console.info('ooo')
    }
}
animal.bite();   //ooo

//Object.is()同值相等

console.info(Object.is(NaN,NaN));  //true
console.info(Object.is(1,'-1'));  //false

//对象合并Object.assign()
let obj1={
    a:"1"
}
let obj2 = {
    a:"a",
    b:"2"
}

let obj3 = {
    c:"3"
}

Object.assign(obj1,obj2,obj3)
console.info(obj1)  //{a:'a',b:'2',c:'3'}

//Object.keys()
var obj = { foo: 'bar', baz: 42 };
console.info(Object.values(obj));  //['bar',42]
console.info(Object.keys(obj));  //['foo','bar']
console.info(Object.entries(obj));  //[['foo','bar'],['baz',42]]
