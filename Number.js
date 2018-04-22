/**
 * Created by admin on 2018/4/22.
 */
//isInteger  判断是否为整数

console.info(Number.isInteger(1)) //true
console.info(Number.isInteger(NaN))  //false
console.info(Number.isInteger('a'))  //false
console.info(Number.isInteger('12'))  //false
console.info(Number.isInteger(-10))  //true
console.info(Number.isInteger(Infinity))  //false

//isNaN  判断是否为NaN
console.info(Number.isNaN(12))  //false
console.info(Number.isNaN(NaN))  //true
console.info(Number.isNaN(Infinity))  //false
console.info(Number.isNaN(3/0))  //false
console.info(Number.isNaN(0/0))  //true


//isFinite  判断是否有限数，
console.info(Number.isFinite(1))  //true
console.info(Number.isFinite(NaN))  //false
console.info(Number.isFinite('a'))  //false
console.info(Number.isFinite(null))  //false

//parseInt  取整
console.info(Number.parseInt(1.32))  //1

//parseFloat  字符串中的首个字符是否是数字。如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
console.info(Number.parseFloat(1.32))  //1.32
console.info(Number.parseFloat('123aaa'))  //123
console.info(Number.parseFloat('a123'))  //NaN







