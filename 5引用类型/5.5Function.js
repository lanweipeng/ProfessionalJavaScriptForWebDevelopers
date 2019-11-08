//定义方式
// function a(){

// }
// var b=function(){//函数表达式

// }
// var c=new Function('num1','num2','return num1+num2')//本质，函数名是指针，函数是对象，但是这种写法不推荐，要解析两次
// console.log(c(1,2))
//案例
// function f1(a, b) { return a + b }
// var f2=f1
// console.log(f1(1,1))//2
// console.log(f2(1,1))//2
// f1=null
// console.log(f2(1,1))//2
//f1指向一个函数，参数a,b返回a+b,f1赋值给f2，相当于f2也指向这个函数，
//因此结果相同,f1指向null,f2仍然指向这个函数，因此能正常执行

//没有重载
// function sum(a,b){
//   return a+b
// }
// function sum(a,b,c){
//   return a+b+c
// }
// console.log(sum(2,3))
// console.log(sum(2,3,4))
//首先sum指向参数为a,b，返回值a+b的函数，接下来指向参数为a,b,c返回a+b+c的函数
// 第一个传入2，3，c没传，所以是undefined，2+3=5，5+undefined所以是NaN，第二个就是正常逻辑

//函数声明&函数表达式
// console.log(sum(1,2))//3
// function sum(a,b){
//   return a+b
// }
// console.log(mul(2,2))//TypeError: mul is not a function
// var mul=function(a,b){
//   return a*b
// }
//函数声明会被提前，放在最上面function sum...，而函数表达式只会把var mul提前，mul是undefined
//除了这点，其他函数声明和函数表达式没有任何区别

//函数作为参数
// let arr=[1,5,2,5,2]
// arr=arr.sort((a,b)=>a-b)
// console.log(arr)

//函数的内部属性 arguments
// function factorial(num){
//   if(num<=1){
//     return 1
//   }
//   return factorial(num-1)*num //但是耦合了
// }
// console.log(factorial(5))
// function factorial(num){
//   if(num<=1){
//     return 1
//   }
//   return arguments.callee(num-1)*num//不管函数名改成什么，都是arguments.callee
// }
// console.log(factorial(5))

//函数的属性和方法
//length:希望接收的参数个数
// function sum(a,b){return a+b}
// console.log(sum.length)//2

//applay()
function sum(a,b){
  return a+b
}
function applaySum(){
return sum.apply(this,arguments)//数组
}
function callSum(){
  return sum.call(this,...arguments)//几个参数
}
console.log(applaySum(2,3))
console.log(callSum(2,3))