/**
 * Created by admin on 2018/4/22.
 */

//join()  将数组中所有元素都转化为字符串并连接在一起。
var a =[1,2,3,4];

console.info(a.join())  //1,2,3,4
console.info(a.join(';'))  //1;2;3;4

// reverse()  将数组里面的元素倒叙
console.info(a.reverse())  //[4,3,2,1]

//sort() 排序

var arr=[111,33,222,4444];
console.info(arr.sort()) //[111,222,33,4444]

//从小到大
const b = arr.sort((a,b)=>{
    return a-b
})

console.info(b)  //[33,111,222,4444]

//从大到小
const c = arr.sort((a,b)=>{
    return b-a
})

console.info(c)  //[444,222,111,33]


//concat() 数组拼接
var aa=[1,2,3];
console.info(aa.concat(4,5))  //[1,2,3,4,5]
console.info(aa.concat([6,7]))  //[1,2,3,6,7]
console.info(aa.concat([4,[5,6,7]]));  //[1,2,3,4,[5,6,7]]

//slice() 截取数组片段
var aaa = [2,3,4,5,6,7];
console.info(aaa.slice(2))  //[4,5,6,7]
console.info(aaa.slice(1,3))  //[3,4]

//splice()  删除数组，或者插入元素(会改变原数组)
var names=['a','b','c','d','e'];
//console.info(names.splice(3))  //['d','e'];  names=['a','b','c']
//console.info(names.splice(3,0,'11'));  //[]   names=['a','b','c','11','d','e']
//console.info(names.splice(2,2))  //['c','d']  names=['a','b','e']
console.info(names.splice(2,3,'0000'))  //['c','d','e']  names = ['a','b','0000']
console.info(names)


//push()和pop()
var arr1=[1,2,3,4];

console.info(arr1.push(5,7))  //6  arr1=[1,2,3,4,5,6]
console.info(arr1.pop())  //返回删除那个值   arr1=[1,2,3,4,5]
console.info(arr1)

//forEach() 循环
var data =[1,2,3]
data.forEach(x=>console.info(x+1));  //2,3,4

//map()
const dataMap = data.map((x)=>{return x+2})  //[3,4,5]
console.info(dataMap)

//filter()  根据特定的条件  返回新的数组
var filter = [1,2,3,4,5,'11'];
const filterData = filter.filter((x)=>{
    return x.constructor === Number
})
console.info(filterData)  //[1,2,3,4,5]

//every()和some() 对数组元素进行指定函数的逻辑判断  全是true返回true  一个false  返回false
var arr2 =[2,3,4,5];
console.info(arr2.every((x)=>{return x<3}))   //false
console.info(arr2.some((x)=>{return x<6}))   //true

//indexOf()  搜索整个数组中具有给定值得元素
var arr3=['1','a'];
console.info(arr3.indexOf('1'));  //0


//Array.of() 将一组值，转换为数组。
console.info(Array.of(2,3,4))  //[2,3,4]

//find() 找到第一个符合条件的数组成员。
var arr4 = [34,5,6,7,82];

const findData = arr4.find((x)=>{
    return x<10
})
console.info(findData)  //5


//fill() 使用给定的值，填充一个数组
console.info([1,2,4].fill(1));  //[1,1,1]
console.info([1,2,3,4,5,6].fill(1,3,5));  //[1,2,3,1,1,6]

//includes() 表示某个数组是否包含给定的值  (第一个参数必选（待检查的给定值），第二个参数可选，表示搜索的起始位置，默认为0)
console.info([1, 2, 3].includes(2));    //true
console.info([1, 2, 3].includes(4));    //false
console.info([1, 2, 3,4,5,6].includes(4,4));    //false














