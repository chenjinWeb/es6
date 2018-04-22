/**
 * Created by admin on 2018/4/22.
 */

//字符串的遍历器接口  for  of
let foo  = "foo";

for(let i of foo){
    console.info(i)
}

//'f'
//'o'
//'o'


//includes(), startsWith(), endsWith()
/*
*includes()：返回布尔值，表示是否找到了参数字符串。
*startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
*endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
*/

let msg = 'hello world!';
console.info(msg.startsWith('hello'))  //true
console.info(msg.endsWith('!'))  //true
console.info(msg.includes('o'))  //true

console.info(msg.startsWith('w',6)) //true
console.info(msg.endsWith('w',7)) //true
console.info(msg.includes('w',)) //true

/*上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。*/

//repeat()  repeat方法返回一个新字符串，表示将原字符串重复n次。
console.info('x'.repeat(3))  //'xxx'
console.info('love'.repeat(2)) //'lovelove'
console.info('aa'.repeat(0))  //''



//padStart()，padEnd()   padStart用于头部补全，padEnd用于尾部补全。
console.info('x'.padStart(3,'1'))   //11x
console.info('x'.padEnd(3,'1'))  //x11

function getDate(){
    let d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`
}

console.info(getDate())

//模板字符串

let s1 = 'hello';
let s2 = 'world';
console.info(`${s1} ${s2}`)   //hello world






















