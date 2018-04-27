/**
 * Created by admin on 2018/4/23.
 */
/*ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。*/
//创建一个Set
const s = new Set();
//添加元素
s.add(1)
console.info(s)


const set = new Set([1,2,3,4,3,2,1]);
console.info([...set].constructor  === Array)

//数组的去重
function deleteSame(arr){
    return [...new Set(arr)]
}
console.info(deleteSame([1,2,3,4,2,2,3,1,1]))


//Set 实例的属性和方法  属性：constructor  size   方法：add(),has(),delete(),clear()
const s1 = new Set([1,2,2]);
console.info(s1.size);  //2个
console.info(s1.constructor === Set)  //true

const s2 = new Set();
s2.add([1,2]);  //s2 = {[1,2]}
s2.add(2);
s2.add(true)
s2.delete(true)
s2.has(2)  //true
s2.clear()
console.info(s2)

/*Array.from方法可以将 Set 结构转为数组。*/
const items = new Set([1,2,3,4,3,4]);
console.info(Array.from(items))   //[1,2,3,4]
console.info([...items])   //[1,2,3,4]

//去重的另一种方法
function dep(arr){
    return Array.from(new Set(arr))
}
console.info(dep([1,2,3,4,3,4]))



/*与其他数据结构的互相转换*/
//（1）Map 转为数组+
const myMap=new Map().set(true,1).set([1,2],3)
console.info(myMap.get(true))
function mapToArr(map){
    return [...map]
}
console.info(mapToArr(myMap))

//(2)数组 转为 Map
console.info(new Map([
    [true,1],
    [[1,2],3]
]))

//(3)Map 转为对象
const myMap1 = new Map().set('a',1).set('b',2);
function mapToObject(map){
    let obj = {}
    for(let [key,value] of map.entries()){
        obj[key]=value
    }
    return obj
}

console.info(mapToObject(myMap1))

//(4)对象转为 Map
const obj4={'name':1,'age':20}
function objToMap(obj){
    let myMap=new Map();
    for(let key in obj){
        myMap.set(key,obj[key])
    }
    return myMap
}

console.info(objToMap(obj4))













