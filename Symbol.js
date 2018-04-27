/**
 * Created by admin on 2018/4/26.
 */

/*
 为啥需要Symbol
 一个新规则的提出，必然是因为有需求，熟悉ES5的人都知道，ES5里面对象的属性名都是字符串，如果你需要使用一个别人提供的对象，你对这个对象有哪些属性也不是很清楚，但又想为这个对象新增一些属性，那么你新增的属性名就很可能和原来的属性名发送冲突，显然我们是不希望这种情况发生的。所以，我们需要确保每个属性名都是独一无二的，这样就可以防止属性名的冲突了。因此，ES6里就引入了Symbol，用它来产生一个独一无二的值。

 Sumbol是什么
 我们已经知道ES6中引入了一个叫Symbol的东西，但是这个东西到底是什么呢？是一个函数还是一个对象或者是其他什么？Symbol实际上是ES6引入的一种原始数据类型，除了Symbol，JavaScript还有其他5种数据类型，分别是Undefined、Null、Boolean、String、Number、对象，这5种数据类型都是ES5中就有的。

 作者：艰苦奋斗的侯小憨
 链接：https://www.jianshu.com/p/174f88d189c6
 來源：简书
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

 */

var s1= Symbol('s1');
console.info(s1);  //Symbol(s1)
var s2 =Symbol("s2");
console.info(s1===s2)  //false
var s3 = Symbol('s2');
console.info(s2===s3);  //false

//如果参数是对象的话，会自动调用对象的toString方法
var s4 = Symbol({a:1,b:2});
console.info(s4)  //Symbol([object,object])

//Symbol如何作为属性名
let a = {}
let s5 = Symbol();
a[s5] = '1';
console.info(a[s5])  //1
a={
    [s5]:'2'
}
console.info(a[s5]) //2

//Symbol不能与其他类型进行预算
console.info(typeof String(Symbol('1')))  //'Symbol(1)'

