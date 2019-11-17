//OO语言一般有接口继承和实现继承，ES只支持是实现继承，实现继承主要靠原型链
// function Animate () {
//   this.category = 'Animate'
// }
// function Dog () {
//   // this.category = 'dog'
// }
// Dog.prototype = new Animate()
// Dog.prototype.getCategory= function() {
//     return this.category
//   }
// var dog = new Dog()
// console.log(dog.getCategory())
// console.log(dog.toString())
// //确定原型和实例的关系
// console.log(dog instanceof Dog)
// console.log(dog instanceof Animate)
// console.log(dog instanceof Object)
// console.log(Dog.prototype.isPrototypeOf(dog))
// console.log(Animate.prototype.isPrototypeOf(dog))
// console.log(Object.prototype.isPrototypeOf(dog))

//注意
//1.给原型添加方法要放在继承之后
//2.不能使用字面量来创造原型方法，因为这样会重写原型链
//问题
//1.
// function Father(){
//   this.house=['house1','house2']
// }
// function Son(){}
// Son.prototype = new Father()
// var son1 = new Son()
// var son2 = new Son()
// console.log(son1.house)
// console.log(son2.house)
// son1.house.push('house3')
// console.log(son1.house)
// console.log(son2.house)
//2.子不能向父传递参数

//借用构造函数解决问题1
// function Father(){
//     this.house=['house1','house2']
//   }
//   function Son(){
//     Father.call(this)
//   }
//   Son.prototype = new Father()
//   var son1 = new Son()
//   var son2 = new Son()
//   console.log(son1.house)
//   console.log(son2.house)
//   son1.house.push('house3')
//   console.log(son1.house)
//   console.log(son2.house)

//解决问题2
// function Father(name){
//   this.name = name
//   this.house=['house1','house2']
// }
// function Son(name){
//   Father.call(this,name)
// }
// Son.prototype = new Father()
// var son1 = new Son('son1')
// var son2 = new Son('son2')
// console.log(son1.name)
// console.log(son2.name)

//组合继承--最经典的继承
// function Father(name){
//   this.name = name
//   this.house=['house1','house2']
// }
// function Son(name){
//   Father.call(this,name)
// }
// Son.prototype = new Father()
// Son.prototype.sayHi = function(){
//   console.log(this.name)
// }
// var son1 = new Son('son1')
// var son2 = new Son('son2')
// son1.sayHi()
// son2.sayHi()

//原型式继承
// function object(o){
//   function F(){}
//   F.prototype = o
//   return new F()
// }
// var person = {
//   name: 'lwp',
//   friends: ['hw','phx', 'czt']
// }
// var anotherPerson = object(person)
// anotherPerson.name = 'lh'
// anotherPerson.friends.push('zm')
// var yetanotherPerson = object(person)
// yetanotherPerson.name = 'xm'
// yetanotherPerson.friends.push('az')
// console.log(person)
// console.log(yetanotherPerson)
// console.log(yetanotherPerson.friends)

//寄生式继承
// function object(o){
//   function F(){}
//   F.prototype = o
//   return new F()
// }
// function createAnother(person){
//   var clone = object(person)
//   clone.sayHi = function () {
//     console.log('hi')
//   }
//   return clone
// }
// var person = {
//   name: 'lwp',
//   friends: ['hw', 'phx']
// }
// var anotherPerson= createAnother(person)
// anotherPerson.sayHi()

//寄生组合式继承--最理想的继承方式
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue']
}
SuperType.prototype.sayName = function() {
  console.log(this.name)
}
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
inheritPrototype(SubType, SuperType)
// SubType.prototype = new SuperType()
// SubType.prototype.constuctor = SubType
SubType.prototype.sayAge = function() {
  console.log(this.age)
}
function inheritPrototype(subType, superType) {
  var prototype = Object(subType.prototype)
  prototype.constuctor = subType
  subType.prototype = prototype
}