// function factorial(n){
//   if(n<1){
//     return 1
//   }
//   return n*factorial(n-1)
// }
// console.log(factorial(4))
// //但是如果这样，就会出错.
// //分析：factorial指向函数，another = factorial意思是another指向factorial指向的函数（赋值地址）
// //然后factorial = null表示factorial指向null，不再保存函数的地址
// //another可以调用函数，但是执行到这里会出错return n*factorial(n-1)，因为factorial调用不了函数
// var another = factorial
// factorial = null
// console.log(another(4))

//改进：适用callee，arguments.callee指向正在执行的函数的指针
// function factorial(n){
//   if(n<1){
//     return 1
//   }
//   return n*arguments.callee(n-1)
// }
// console.log(factorial(4))
// var another = factorial
// factorial = null
// console.log(another(4))
//缺点：严格模式下不能使用脚本访问arguments.callee

//改进：
var factorial = (function f(n){
    if(n<1){
      return 1
    }
    return n*f(n-1)
  })
  console.log(factorial(4))
  var another = factorial
  factorial = null
  console.log(another(4))