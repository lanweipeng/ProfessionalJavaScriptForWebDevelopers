//没有块级作用域
// function  outputNumbers(count) {
//   for(var i = 0; i<count;i ++) {
//     console.log(i)
//   }
//   console.log(i)
// }
// outputNumbers(10)

//匿名函数模仿块级作用域
function  outputNumbers(count) {
  (function(){for(var i = 0; i<count;i ++) {
    console.log(i)
  }})()
  console.log(i)
}
outputNumbers(10)