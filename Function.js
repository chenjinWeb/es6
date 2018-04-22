/**
 * Created by admin on 2018/4/22.
 */

//箭头函数:
/*function add (x,y){
    return x+y
}*/

//console.info(add(1,2)) //3

const add = (x,y)=>x+y;

console.info(add(1,2))  //3

const arr = [1,2,3];
arr.map((x)=>{
    console.info(x)  //1,2,3
})

//rest参数

const person = (name,age,...others)=>{
    console.info(name)
    console.info(age)
    console.info(...others)
}

person('mcj',28,'帅','有钱');


//默认参数
function man(name='mcj',age=12){
    console.info(`${name}-${age}`)
}

man(); //mcj-12
man('cl',10) //cl-10
man('mcx',20,23) //mcx-20




