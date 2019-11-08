//函数声明和函数表达式的区别就是变量提升
if (condition) {
  function sayHi () {
    console.log('hi')
  }
} else {
  function sayHi () {
    console.log('hello')
  }
}
//这种写法不同浏览器解析不一样，很危险
var sayHi
if (condition) {
  sayHi = function () {
    console.log('hi')
  }
} else {
  sayHi = function () {
    console.log('hello')
  }
}
//这种写法不会出问题