// let date = new Date()//当前日期
// console.log(date)
//  date = new Date(0)//1970-01-01T00:00:00.000Z 之后的毫秒数
//  console.log(date)
// date= new Date(Date.parse('1996-1-1'))//不同地区不同格式
// console.log(date)
// date= new Date('1996-3-7')//后台会调用Date.parse()等价于date= new Date(Date.parse('1996-3-7'))
// console.log(date)
// date= new Date('May 25, 2000')//不同地区不同格式
// console.log(date)
// console.log(Date.parse('m'))//NaN
// console.log(date)
// date= new Date(Date.UTC(2000,0,5,5,5,5,5))//不同地区不同格式 月份0表示1
// console.log(date)
// let start = new Date()
// setTimeout(()=>{
//   console.log('hh')
// },2000)
// let stop=+new Date()
// console.log(stop-start)

//继承的方法
// let date=new Date()
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.valueOf())
// console.log(date.toTimeString())

//比较
// let date1=new Date(2000,2,1)
// let date2=new Date(2000,1,1)
// console.log(date1>date2)

//格式化
// let date = new Date();
// console.log(date.toString())
// console.log(date.toTimeString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toUTCString())

//日期/时间组件方法
let date = new Date()
console.log(date.getDate())

console.log(date.getTime())



console.log(date.getFullYear())
console.log(date.getUTCFullYear())

console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getDay())//星期几
