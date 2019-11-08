// function  Person(name) {
//   this.getName = function () {
//     return name
//   }
//   this.setName = function(value){
//     name = value
//   }
// }
// var person = new Person('lwp')
// console.log(person.getName())
// person.setName('hw')
// console.log(person.getName())
//构造函数的缺点：每个实例会创建同样新方法

// (function(){
//   var name = ""
//   Person = function(value) {
//     name = value
//   }
//   Person.prototype.getName = function(){
//     return name
//   }
//   Person.prototype.setName = function(value){
//     name = value
//   }
// })()
// var person1 = new Person('lwp')
// console.log(person1.getName())
// person1.setName('hw')
// console.log(person1.getName())
// var person2 = new Person('phx')
// console.log(person1.getName())
// console.log(person2.getName())