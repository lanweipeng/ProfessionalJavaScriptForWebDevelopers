//对象：无序属性的集合，属性包含值，对象，函数
//创建1：创建Object的实例
// let obj = new Object()
// obj.name = 'lwp'
// obj.sayName = function(){
//   console.log(obj.name)
// }
// obj.sayName()
//创建2：对象字面量
// let obj = {
//   name: 'lwp',
//   sayName: function (){
//     console.log(this.name)
//   }
// }
// obj.sayName()

//属性类型：数据属性|访问器属性
// 数据属性：
// configurable：是否可用delete删除再重新定义属性
// enumerable：是否可用for-in找出来
// writable：默认true
// value
//使用defineProperty修改这些属性
//writable
// let obj = {
//   name: 'lwp'
// }
// Object.defineProperty(obj, 'name', {
//   writable: false
// })
// obj.name= 'lisi'
// console.log(obj.name)
// Object.defineProperty(obj, 'name', {
//   writable: true
// })
// obj.name= 'lisi'
// console.log(obj.name)

//configurable
// let obj = {
//   name: 'lwp'
// }
// Object.defineProperty(obj, 'name', {
//   // configurable: false
//   configurable: true
// })
// delete obj.name
// console.log(obj.name)

//访问器属性
// configurable
// enumerable
// get：获取时调用
// set：设置时调用
// let obj= {
//   year: 1996,
//   old: 0
// }
// Object.defineProperty(obj,'year',{
//   get(){
//     return this.birth
//   },
//   set(nowYear){
//     this.old += nowYear - this.year
//     this.year = nowYear
//   }
// })
// console.log(obj)
// obj.birth = 2019
// console.log(obj)
// obj.birth = 2020
// console.log(obj)

//defineProperties
// let obj = {}
// Object.defineProperties(obj, {
//   _year: {
//     value: 1996
//   },
//   age: {
//     value: 0
//   },
//   year: {
//     get () {
//       return this._name
//     },
//     set (newYear) {
//       this.age += newYear - this._year
//       this._year = newYear
//     }
//   }
// })
// obj.year=2019
// console.log(obj.age)

//getOwnPropertyDescriptor
// let obj = {}
// Object.defineProperties(obj, {
//   _year: {
//     value: 1996
//   },
//   age: {
//     value: 0,
//     writable: true
//   },
//   year: {
//     get () {
//       return this._name
//     },
//     set (newYear) {
//       this.age += newYear - this._year
//       this._year = newYear
//     }
//   }
// })
// obj.year=2019
// var ad = Object.getOwnPropertyDescriptor(obj,'age')
// console.log(ad)
// var yd = Object.getOwnPropertyDescriptor(obj,'year')
// console.log(yd)
// console.log(typeof yd.get)