// 创建对象
// 1)
// let obj = new Object()
// 2)
// let obj = {}//常用
//点语法
// let obj={}
// obj.name='lwp'//set
// console.log(obj.name)//get
//方括号语法
// let obj={}
// obj['age']=23//set
// console.log(obj['age'])//get

// let height='height'//变量
// obj[height]=168
// console.log(obj[height])

// obj['first name']='hw'//这种断开就没办法用点语法
// console.log(obj['first name'])
//这种方式适合访问变量，否则都建议使用点语法
//example:用变量访问obj的具体例子，一道算法题
//问题：第一个只出现一次的字母，例如abbc，就是a，
// function firstDisOnce(str){
//   let obj={}
//   let res=null
//   //第一次先标记每个字母出现的次数
//   for(a of str){
//     if(!obj[a]){
//       //把字符的每一个字母作为obj的key，出现的次数作为value
//       obj[a]=1
//     }else{
//       obj[a]++
//     }
//   }
//   //找出第一个在obj的value为1，就是答案
//   for(a of str){
//     if(obj[a]===1){
//       res=a
//       break
//     }
//   }
//   return res
// }
// console.log(firstDisOnce('ddfoofojfe'))

