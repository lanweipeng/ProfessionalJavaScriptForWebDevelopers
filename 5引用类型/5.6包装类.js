// var str='fwefe'
// console.log(str.substring(2))
// str是基本类型，为啥有方法
//底层原理
// var str='fwefe'
// var Str=new String(str)
// console.log(Str.substring(2))
// Str=null
//Boolean
// let obj=new Boolean(false)
// console.log(obj&&true)//false 因为Object返回都是true
// let bool=false
// console.log(bool&&true)
// //强烈不推荐使用Boolean

//Number
// var number=10
// console.log(number.toString())
// console.log(number.toString(2))
// console.log(number.toString(8))
// console.log(number.toString(10))
// console.log(number.toString(16))
// console.log(number.toFixed(2))
// console.log(number.toExponential(2))

//String
//字符方法
// var str='grekl'
// console.log(str.charAt(2))
// console.log(str.charCodeAt(2))
// console.log(str[2])

//字符串操作方法 slice concat 参考array
// var str='fweergkldfnfkl'
// console.log(str.slice(2))
// console.log(str.slice(2,3))
// console.log(str.concat('23'))
// //substring[start,end) substr[start,num
// console.log(str.substring(2))
// console.log(str.substr(2))
// console.log(str.substring(2,3))
// console.log(str.substr(2,1))
// console.log(str.slice(-3))
// console.log(str.substring(-3))//倒数
// console.log(str.substr(-3))
// console.log(str.slice(-3,-2))
// console.log(str.substring(-3,-4))
// console.log(str.substr(-3,3))

//位置
// var str = 'fwekifkleffeloel'
// console.log(str.indexOf('f'))
// console.log(str.lastIndexOf('f'))
// //寻找所有
// function findAllIndex (str, char) {
//   var arr = []
//   var pos = str.indexOf(char)
//   while (pos >-1) {
//     arr.push(pos)
//     pos=str.indexOf(char,pos+1)
//   }
//   return arr
// }
// console.log(findAllIndex(str, 'f'))

//trim()
// var str='   efwk '
// console.log(str.trim())

//大小写转换
// var str='fwef'
// console.log(str.toUpperCase())
// var str='fwFf'
// console.log(str.toLowerCase())

//模式匹配
// var str='fweiojkfio'
// console.log(str.match(/io/))
// console.log(str.search(/io/g))
// var res
// res=str.replace("io","hh")
// console.log(res)
// res=str.replace(/io/g,'hh')
// console.log(res)

//转义字符 replace传入函数
// var str = '<h1>hh&*</h1>'
// res = str.replace(/[<>*?]/g, function (match, pos, originalText) {
//   switch (match) {
//     case '<':
//       return '&lt;'
//     case '>':
//       return '&gt;'
//     case '&':
//       return '&amp;'
//     case '*':
//       return '&quot;'
//   }
// })
// console.log(res)

//split
// var str='dfsi,fweki,fweki'
// console.log(str.split(','))
// console.log(str.split(',',2))
// console.log(str.split(/[^\,]+/))

//localeCompare
// var str='fwa'
// console.log(str.localeCompare('akd'))
// console.log(str.localeCompare('fwa'))
// console.log(str.localeCompare('zkd'))

//fromCharCode
// console.log(String.fromCharCode(101,102,103))

