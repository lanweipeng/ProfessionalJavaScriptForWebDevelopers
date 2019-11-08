//创建对象
// let person1 ={
//   name: 'lwp',
//   age: 18,
//   sayHello(){
//     console.log('I am '+this.name)
//   }
// }
// let person2 ={
//   name: 'hw',
//   age: 19,
//   sayHello(){
//     console.log('I am '+this.name)
//   }
// }
// let person3 ={
//   name: 'phx',
//   age: 20,
//   sayHello(){
//     console.log('I am '+this.name)
//   }
// }
// person1.sayHello()
// person2.sayHello()
// person3.sayHello()
//缺点：使用同一接口创建很多对象，会产生冗余代码

//工厂模式
// function createPerson(name, age){
//   var obj = {}
//   obj.name = name
//   obj.age = age
//   obj.sayHello = function(){
//     console.log(obj.name)
//   }
//   return obj
// }
// var person1 = createPerson('lwp', 21)
// var person2 = createPerson('hw', 21)
// var person3 = createPerson('phx', 21)
// person1.sayHello()
// person2.sayHello()
// person3.sayHello()
//缺点：不能识别类型

//构造函数
// function Person(name, age){
//   this.name = name
//   this.age = age
//   this.sayHello = function() {
//     console.log(this.name)
//   }
// }
// function Dog(name, age){
//   this.name = name
//   this.age = age
//   this.sayHello = function() {
//     console.log('我是'+this.name+',我'+this.age+'岁')
//   }
// }
// var person1 = new Person('lwp',23)
// var person2 = new Person('lwp',23)
// var dog = new Dog('小黄', 6)
// person1.sayHello()
// dog.sayHello()
// console.log(person1.constructor === Person)
// console.log(dog.constructor === Dog)
// //new 四个步骤
// // 创建新对象
// // 把作用域赋值给新对象
// // 执行对象（赋值）
// // 返回对象
// //将函数当作普通函数
// Person('phx',22)
// global.sayHello()
// //在另一个作用域调用
// var obj = {}
// Person.call(obj,'hw',22)
// obj.sayHello()
// //构造函数缺点
// //sayHello===new Function('console.log(this.name)'),这样就是new了两次
// console.log(person1.sayHello==person2.sayHello)
// //改进:可以把方法提取出来
// function Animate(name){
//   this.name = name;
//   this.say = say
// }
// function say(){
//   console.log(this.name)
// }
// var cat1 = new Animate('cat1')
// var cat2 = new Animate('cat2')
// cat1.say()
// console.log(cat1.say === cat2.say)//true
// //缺点:say放在全局,这就丧失了封装性,这时候我们需要原型的概念

//原型

// function Person (name) {
//   this.name = name
// }
// Person.prototype.sayHi = function () {
//   console.log(this.name)
// }
// var person1 = new Person('p1')
// var person2 = new Person('p2')
// person1.sayHi()
// console.log(person1.sayHi === person2.sayHi)

//创建了一个函数，就会给他一个prototype，指向原型,原型有个constructor属性，指向prototype所在的函数
//console.log(Person.prototype.constructor===Person)//true
//连接是存在实例与原型对象之间的


// function Person(name){
//   this.name = name
// }
// var person = new Person('lwp')
// //isPrototypeOf
// console.log(Person.prototype.isPrototypeOf(person))
//getPrototypeOf
// console.log(Object.getPrototypeOf(person)==Person.prototype)

//可以通过实例访问原型对象的值，但却不能重写,如果重名，只能在实例覆盖，找到了就不会去原型继续找
//如果把这个删掉，delete 实例找不到这个属性，就会去原型找
// function Person(){

// }
// Person.prototype.name = 'old'
// var person = new Person()
// console.log(person.name)
// person.name = 'new'
// console.log(person.name)
// delete person.name
// console.log(person.name)

//hasOwnProperty:判断属性是存在实例还是存在原型
// function Person(){}
// Person.prototype.name = 'lwp'
// var person = new Person()
// console.log(person.hasOwnProperty('name'))
// person.name = 'hw'
// console.log(person.hasOwnProperty('name'))

//for-in:判断是否存在该属性，不管在实例还是在原型中
// function Person(){}
// var person = new Person()
// console.log('name' in person)
// Person.prototype.name = 'lwp'
// console.log('name' in person)
// function Dog(){}
// var dog = new Dog()
// console.log('name' in dog)
// dog.name = 'xiaobai'
// console.log('name' in dog)

// function hasPrototypeProperty(obj,name) {
//   return !obj.hasOwnProperty(name) && name in obj
// }
// function Person (){}
// Person.prototype.name = 'lwp'
// var person = new Person()
// console.log(hasPrototypeProperty(person,'name'))

//Object.keys 可枚举 Object.getOwnPropertyNames可枚举+不可枚举
// function Person(){}
// Person.prototype.name = 'lwp'
// var keys = Object.keys(Person.prototype)
// console.log(keys)
// console.log(Object.getOwnPropertyNames(Person.prototype))

//更简单的原型写法
// function Person(){}
// Person.prototype = {
//   name: 'lwp',
//   age: 18,
//   sayHi: function() {console.log(this.name)}
// }
// var person = new Person()
// console.log(Person.prototype.constructor == Person)
//但是我们重写了prototype，所以constructor不指向Person了，本来prototype是包含constructor的

//改进
// function Person(){}
// Person.prototype = {
//   constructor: Person,
//   name: 'lwp',
//   age: 18,
//   sayHi: function() {console.log(this.name)}
// }
// var person = new Person()
// console.log(Person.prototype.constructor == Person)
// for(p in Person.prototype){console.log(p)}
//但是变成可枚举了

//再改进
// function Person(){}
// Person.prototype = {
//   name: 'lwp',
//   age: 18,
//   sayHi: function() {console.log(this.name)}
// }
// Object.defineProperty(Person.prototype, 'constructor',{
//   value: Person,
//   enumerable: false
// })
// var person = new Person()
// console.log(Person.prototype.constructor == Person)
// for(p in Person.prototype){console.log(p)}

//重写对象切断了实例与原型对象之间的关系
// function Person(){}
// var person = new Person()
// Person.prototype = {
//   constructor: Person,
//   name: 'lwp'
// }
// console.log(person.name)

//原型对象的问题：引用类型共享问题
// function Person(){}
// Person.prototype = {
//   constructor: Person,
//   friends: ['hw']
// }
// var p1= new Person()
// var p2 = new Person()
// console.log(p1.friends)
// p2.friends.push('hx')
// console.log(p1.friends)
//解决：构造函数组合原型

//构造组合原型:构造放属性，原型放方法，定义引用类型的默认模式
// function Person(){
//   this.friends = ['hw']
// }
// Person.prototype = {
//   constructor: Person,
//   //...方法
// }
// var p1= new Person()
// var p2 = new Person()
// console.log(p1.friends)
// p2.friends.push('hx')
// console.log(p1.friends)

//动态原型模式
// function Person(name){
//   this.name = name
//   if(typeof this.sayHi != 'function'){//初次调用构造函数指向，不必每个方法都判断，判断一个即可
//     Person.prototype.sayHi = function() {console.log(this.name)}
//   }
// }
// console.log(typeof Person.sayHi)
// var person = new Person('lwp')
// console.log(typeof person.sayHi)
// person.sayHi()
// console.log(typeof person.sayHi)

//寄生器构造函数，应用场景：我们想加一个方法，但是又不能修改Array的构造函数
// function SpecialArray () {
//   var arr = []
//   arr.push.apply(arr, arguments)
//   arr.toPipeString = function () {
//     return this.join('|')
//   }
//   return arr
// }
// var s = new SpecialArray('lwp', 'hw')
// console.log(s.toPipeString())
//尽量不使用这种方法

//稳妥构造函数模式
// function Person(name){
//   var o = new Object()
//   o.sayHi = function() {
//     console.log(name)
//   }
//   return o
// }
// var person = Person('lwp')
// person.sayHi()