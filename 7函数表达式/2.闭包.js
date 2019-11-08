// function createFunction(){
//   var result = new Array()
//   for(var i = 0;i < 10;i ++){
    
//     result[i] = function(){
//       return i
//     }
//   }
//   return result
// }
// console.log(createFunction())

// function createFunction(){
//   var result = new Array()
//   for(var i = 0;i < 10;i ++){
//     result[i] = function(n){
//       return n
//     }(i)
//   }
//   return result
// }
// console.log(createFunction())

// var name = 'window'
// var obj = {
//   name: 'obj',
//   getNameFun: function(){
//     return function () {
//       return this.name
//     }
//   }
// }
// console.log(obj.getNameFun()())

// var name = 'window'
// var obj = {
//   name: 'obj',
//   getNameFun: function(){
//     var that = this
//     return function () {
//       return that.name
//     }
//   }
// }
// console.log(obj.getNameFun()())